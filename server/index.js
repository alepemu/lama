'use strict';

const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const router = require('./router.js');
const app = new Koa();

const PORT = 3100;
// const CONFIG = {
//   key: 'koa.sess',
//   maxAge: 86400000,
//   autoCommit: true,
//   overwrite: true,
//   httpOnly: true,
//   signed: true,
//   rolling: false,
//   renew: false,
//   secure: true,
//   sameSite: null,
// };
// app.keys = ['some secret hurr'];

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(bodyParser());
// app.use(session(CONFIG, app));
// app.use(session(app))
app.use(router.routes());

app.listen(PORT, () => {
  console.log('Server running on port', PORT);
});
