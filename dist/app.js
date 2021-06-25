"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Koa = require("koa");
var app = new Koa();
app.use(function (ctx) {
    ctx.body = "Hello world 你们";
});
module.exports = app;
//# sourceMappingURL=app.js.map