'use strict';

const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const router = require('./router.js');
const PORT = 3100;

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(router.routes());

app.listen(PORT, () => {
  console.log('Server running on port', PORT);
});
