const verifyAuth = (req, res, next) => {
  const IS_VERIFIED = true;
  // const user = req.headers["x-user"];
  // const dbUser = db.lookup(user);
  // const IS_VERIFIED = dbUser.isVerified;

  if (IS_VERIFIED) {
    next();
  } else {
    res.status(401).json({ message: "Not authorized" });
  }
};

const logTime = (req, res, next) => {
  const date = new Date();
  const time = date.toLocaleTimeString();
  console.log(time);
  next();
};

export { verifyAuth, logTime };
