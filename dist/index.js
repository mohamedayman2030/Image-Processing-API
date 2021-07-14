"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
//initialize the application
var app = express_1.default();
//determine port number
var port = 3000;
// use route file
app.use("/", index_1.default);
// once teh server started to listen , print this msg
app.listen(port, function () {
    console.log("server started");
});
exports.default = app;
