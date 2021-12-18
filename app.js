const Koa = require('koa');
const json = require('koa-json');
const KoaRouter = require('koa-router');
const ApiRoute = require('./Routes/route');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

const router = new KoaRouter();




app.use(json());
app.use(bodyParser());
app.use(ApiRoute.routes(),ApiRoute.allowedMethods());


//Simple Middleware
//app.use(async ctx => ctx.body = {msg:"Hello world my boy"});


//Router Middleware
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log("Server started on port 3000"));