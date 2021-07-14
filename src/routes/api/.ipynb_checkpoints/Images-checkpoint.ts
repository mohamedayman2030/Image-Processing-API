import express from "express";
import fs from "fs";
import sharp from "sharp";
import validateParameters from "../middleware/validateLink";
import modifyImage from "./helper";

const getimages = express.Router();

getimages.get("/", validateParameters, async (req:express.Request, res:express.Response, next:express.NextFunction): Promise<void>  => {
  res.status(200);

  const path: string =
    (("src/routes/api/images/full/" + req.query.filename) as string) + ".jpg";
  const width = Number(req.query.width);
  const height = Number(req.query.height);
  const filename = req.query.filename as string;

  await fs.access(path, fs.constants.R_OK | fs.constants.W_OK, (err) => {
    if (err) {
      console.error("cannot access");
      res.send("cannot access this file");
    } else {
      console.log("can access");
      if (
        fs.existsSync(
          "src/routes/api/newImages/" +
            filename +
            "&&" +
            width +
            "&&" +
            height +
            ".jpg"
        )
      ) {
        res.sendFile(filename + "&&" + width + "&&" + height + ".jpg", {
          root: "src/routes/api/newImages/",
        });
      } else {
        modifyImage(path, filename, width, height);
        res.sendFile(filename + "&&" + width + "&&" + height + ".jpg", {
          root: "src/routes/api/newImages/",
        });
      }
    }
  });
});

export default getimages;
