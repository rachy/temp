"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var images_1 = __importDefault(require("./routes/images"));
var app = express_1.default();
var port = 5000;
// set enpoint
app.use('/api', images_1.default);
// check for port to avoid allready in use error testing
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, function () { return console.log("Listening on port " + port); });
}
exports.default = app;
