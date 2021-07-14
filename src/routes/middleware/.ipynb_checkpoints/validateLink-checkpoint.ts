import express from "express";
import fs from "fs";

// this function to validate teh parameters of the query
const validateParameters = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  // receive data from the link
  const fname = req.query.filename as string;
  const width = Number(req.query.width) || null;
  const height = Number(req.query.height) || null;
  // check if the file name is not exist

  if (!fname) {
    res.status(400).send("can't response without file name");
      return;
  }
  // check the link contains height or not
  if (!height) {
    res.status(400).send("can't response without height");
      return;
  }

  //check if the height is positive or not
  else if (height <= 0) {
    res.status(400).send("height must be positive");
      return;
  }

  // check the link contains width or not
  if (!width) {
    res.status(400).send("can't response without width");
      return;
  }
  // check the height is positive or not
  else if (width <= 0) {
     res.send("width must be positive");
      return;
  }

  next();
};
export default validateParameters;
