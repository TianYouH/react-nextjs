const Koa = require("koa");
const Router = require("koa-router");
const next = require("next");

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev})
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();

// 后端路由映射 配置 开始
  const router = new Router();

  // 匹配映射路由
  router.get('/huang/:id',async (ctx) => {
    const id = ctx.params.id
    // console.log("获取id:", id);
    await handle(ctx.req, ctx.res, {
      pathname: '/router/dynamic-parameters', // 映射目标页面
      query: { id }
    })
    ctx.respond = false;
  })
  
  server.use(router.routes());
// 后端路由映射 配置 结束

  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  })

  server.listen(3000, () => {
    console.log('koa服务启动，端口是3000')
  })
})
