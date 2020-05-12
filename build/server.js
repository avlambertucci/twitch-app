"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var app = express_1["default"]();
app.get('/', function (req, res) {
    res.json('hello-world');
});
app.use(express_1["default"].json());
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
