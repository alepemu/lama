'use strict';

const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const router = require('./router.js');
const app = new Koa();

const dispatcher = require('./services/service.dispatcher.js');

require('dotenv').config();
const PORT = process.env.SERVER_PORT || 3100;
const CORSCONFIG = {
  origin: 'http://localhost:3000',
  // origin: 'http://192.168.0.241:3000',
  credentials: true,
};
const CONFIG = {
  key: 'koa.sess',
  maxAge: 600000,
  autoCommit: true,
  overwrite: true,
  httpOnly: false, //**
  signed: true,
  rolling: false,
  renew: false,
  secure: false, //**
  sameSite: null,
};
app.keys = [process.env.SECRET || 'lamalamalama'];

app.use(cors(CORSCONFIG));
app.use(bodyParser());
app.use(session(CONFIG, app));
// app.use(session(app));
app.use(router.routes());

app.listen(PORT, () => {
  console.log('Server running on port', PORT);
});
