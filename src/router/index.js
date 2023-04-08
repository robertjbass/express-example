import { Router } from "express";
const peopleRouter = Router();
const publicRouter = Router();
import { getDatabase } from "../index.js";

const getPersonById = (req, res) => {
  const personId = req?.params.id || 12;
  const person = getDatabase(personId);
  res.json(person);
};

const getAllPeople = (_req, res) => {
  const people = getDatabase();
  res.json(people);
};

const publicRoute = (_req, res) => {
  res.send("Hello World");
};

peopleRouter.get("/person/:id", getPersonById);
peopleRouter.get(
  "/people",
  (_req, _res, next) => {
    console.log("PULLING ALL PEOPLE");
    next();
  },
  getAllPeople
);
publicRouter.get("/", publicRoute);

export { peopleRouter, publicRouter };
