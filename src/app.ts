import * as Koa from "koa";

const app = new Koa();

app.use(ctx => {
   ctx.body = "Hello world 你们";
});

module .exports = app;
