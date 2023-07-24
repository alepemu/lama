'use strict';

const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');

require('dotenv').config();

const router = require('./router.js');
const app = new Koa();

const PORT = process.env.SERVER_PORT || 3100;
const CORSCONFIG = {
  origin: "*",
  credentials: true,
};

const CONFIG = {
  key: 'koa.sess',
  maxAge: 86400000,
  httpOnly: false,
  signed: false, /** (boolean) signed or not (default true) */
  secure: false, /** (boolean) secure cookie*/
  sameSite: null, /** (string) session cookie sameSite options (default null, don't set it) */
};

require('./services/service.dispatcher.js');

app.keys = ['not a real secret'];

app.use(session(CONFIG, app))
app.use(cors(CORSCONFIG));
app.use(bodyParser());

app.use(router.routes());

app.listen(PORT, () => {
  console.log('Server running on port', PORT);
});
