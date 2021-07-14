import express from "express";
import routes from "./routes/index";
//initialize the application
const app = express();
//determine port number
const port = 3000;
// use route file
app.use("/", routes);
// once teh server started to listen , print this msg
app.listen(port, () => {
  console.log("server started");
});

export default app;
