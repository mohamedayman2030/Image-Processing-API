"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Images_1 = __importDefault(require("./api/Images"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    res.status(200).send('welcome to image processing API');
});
routes.use('/images', Images_1.default);
exports.default = routes;
