import express from "express";
const app = express();
import cors from "cors";
import fs from "fs";
import { peopleRouter, publicRouter } from "./router/index.js";
import { logTime, verifyAuth } from "./middleware.js";

const PORT = 3000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/api/v1", verifyAuth, peopleRouter);
app.use("/", logTime, publicRouter);

export const getDatabase = (id = null) => {
  const database = fs.readFileSync("./src/people.json", { encoding: "utf-8" });
  if (!id) return JSON.parse(database);
  else return JSON.parse(database).find((person) => person.id === parseInt(id));
};

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
