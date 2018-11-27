
const webpack = require("webpack");
const path = require('path');
const Koa = require("koa");
const app = new Koa();
const koaWebpack = require("koa-webpack");
const fs = require('fs');

const config = require("./webpack.dev.js");
const compiler = webpack(config);
const opn = require('opn');

koaWebpack({ compiler }).then(middleware => {
  app.use(middleware);

  // app.use(async ctx => {
  //   const filename = path.resolve(config.output.path, 'index.html')
    // const filename = path.resolve(config.output.path, 'main.js')
    // const filename = path.resolve(__dirname,  "index.html");
    // console.log(filename)
    // ctx.response.type = "html";
    // ctx.response.body = fs.createReadStream(
    //   filename
    // );
    // ctx.response.body = middleware.devMiddleware.fileSystem.createReadStream(filename)
  // });

  // app.use(async (ctx, next) => {
  //   console.log('enter')
  //   ctx.response.type = 'html';
  //   ctx.response.body = "hello world";
  // });

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
    opn(`http://127.0.0.1:3000`);
  });
});
