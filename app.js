const Koa = require('koa')
const parser = require('koa-bodyparser')
// const classic = require('./api/v1/classic.js')
// const book = require('./api/v1/book.js')

const InitManager = require('./core/init.js')

const app = new Koa()

app.use(parser());
process.cwd();

InitManager.initCore(app)
// REST API
// router.post
// router.put
// router.delete

//  注册

// app.use(async (ctx, next) => {
//     console.log(ctx.path);
//     console.log(ctx.method);
//      路由
//     if (ctx.path === "/classic/latest" && ctx.method === "GET") {
//         ctx.body = { key: 'classic' }
//     }
// })



// app
//     .use(book.routes())
//     .use(classic.routes());


app.listen(5757)