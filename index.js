const Koa = require('koa');
const serve = require('koa-static');
const mount = require('koa-mount');

const page = new Koa();
const app = new Koa();
const port = 3000;

page.use(serve('./public'));

async function hello(ctx) {
  ctx.body = { name: 'rock' };
};

app.use(mount('/', page));
app.use(mount('/hello', hello));

app.listen(port, console.log('server started on port ' + port));
