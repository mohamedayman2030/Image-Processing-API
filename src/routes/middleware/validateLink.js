"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validateParameters = function (req, res, next) {
    var fname = req.query.filename;
    var width = req.query.width;
    var height = req.query.height;
    if (!fname) {
        res.status(400).send('can\'t response without file name');
    }
    if (!height) {
        res.status(400).send('can\'t response without height');
    }
    else if (height < 0) {
        res.send('height must be positive');
    }
    if (!width) {
        res.status(400).send('can\'t response without width');
    }
    else if (width < 0) {
        res.send('width must be positive');
    }
    next();
};
exports.default = validateParameters;
