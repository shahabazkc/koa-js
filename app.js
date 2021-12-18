const Koa = require('koa');
const json = require('koa-json');
const KoaRouter = require('koa-router');
const route = require('./Routes/route');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

const router = new KoaRouter();


app.use(json());
app.use(bodyParser());

let users = [];

//fetching user route
router.get('/get-users', ctx => {
  ctx.body = users;
});

//add user router
router.post('/add-user', ctx => {
  let username = ctx.request.body.user;
  users.push(username);
  ctx.body = users;
})

//Simple Middleware
//app.use(async ctx => ctx.body = {msg:"Hello world my boy"});


//Router Middleware
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log("Server started on port 3000"));