const Koa = require('koa');
const serve = require('koa-static');
const mount = require('koa-mount');

const mongooseConnect = require('./config');
const { findMovieByYear } = require('./controllers/movies');

mongooseConnect();
const page = new Koa();
const app = new Koa();
const port = 3000;

page.use(serve('./public'));

app.use(mount('/', page));
app.use(mount('/api', findMovieByYear));

app.listen(port, console.log('server started on port ' + port));
