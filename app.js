const Koa = require('koa');
const json = require('koa-json');
const KoaRouter = require('koa-router');

const app = new Koa();

app.use(json());

app.use(async ctx => ctx.body = {msg:"Hello world my boy"});

app.listen(3000,()=>console.log("Server started on port 3000"));