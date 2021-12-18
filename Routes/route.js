const KoaRouter = require('koa-router');
const router = new KoaRouter({prefix:'/api'});


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

module.exports = router;