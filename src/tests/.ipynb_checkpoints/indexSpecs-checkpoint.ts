import supertest from "supertest";
import app from "../index";
import fs from "fs";
import modifyImage from "../routes/api/helper";
import { Request, Response } from "express";

const request = supertest(app);
describe("Test endpoint responses", () => {
  it("gets the api endpoint", async () => {
    const response = await request.get(
      "/images?filename=fjord&height=500&width=1000"
    );
    expect(response.status).toBe(200);
  });
});

describe("test image processing", () => {
  it("chek file is exist", async () => {
    const imagename: string = "fjord";
    const height = 1000;
    const width = 1000;
    let path: string = "src/routes/api/images/full/" + imagename + ".jpg";
    await modifyImage(path, imagename, height, width);
    expect(
      fs.existsSync(
        (("src/routes/api/newImages/" + imagename) as string) +
          "&&" +
          width +
          "&&" +
          height +
          ".jpg"
      )
    ).toBeTruthy();
  });
});
