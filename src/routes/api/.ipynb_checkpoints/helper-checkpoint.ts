import { Request, Response } from "express";
import fs from "fs";

import sharp from "sharp";

const modifyImage = async (
  path: string,
  filename: string,
  width: number,
  height: number
): Promise<void> => {
  await sharp(path)
    .resize(width, height)
    .toFile(
      "src/routes/api/newImages/" +
        filename +
        "&&" +
        width +
        "&&" +
        height +
        ".jpg"
    );
};

export default modifyImage;
