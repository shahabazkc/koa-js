const KoaRouter = require('koa-router');
const router = new KoaRouter({prefix:'/post'});


let posts = [];

//fetching user route
router.get('/get-posts', ctx => {
  ctx.body = posts;
});

//create post router
router.post('/create-post', ctx => {
  let post = ctx.request.body.post;
  posts.push(post);
  ctx.body = posts;
})

module.exports = router;