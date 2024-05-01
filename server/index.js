"use strict";

const Koa = require("koa");
const cors = require("@koa/cors");
const bodyParser = require("koa-bodyparser");
const jwt = require("koa-jwt");

require("dotenv").config();

const router = require("./router.js");
const app = new Koa();

const PORT = process.env.PORT || 3100;

require("./services/service.dispatcher.js");

app.use(jwt({ secret: "shared-secret", passthrough: true }));
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser());

app.use(router.routes());

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
