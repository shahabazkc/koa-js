const KoaRouter = require('koa-router');
const router = new KoaRouter();


router.get('/test', ctx => ctx.body = "Hello world");

module.exports = router;