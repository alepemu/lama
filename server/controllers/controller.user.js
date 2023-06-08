'use strict';

const { User } = require('../models/models');

exports.getUser = async (ctx) => {
  try {
    // {"_id": "6480a98535fbc7221e4f2eb2"}
    const userId = ctx.request.body._id;
    ctx.body = await User.findById(userId);
    ctx.status = 200;
  } catch (error) {
    ctx.body = error.message;
    ctx.status = 500;
  }
};

exports.createUser = async (ctx) => {
  try {
    // {"name": "Test", "email": "email@email.com", "password": "qwerty"}
    const userData = ctx.request.body;
    ctx.body = await User.create(userData);
    ctx.status = 200;
  } catch (error) {
    ctx.body = error.message;
    ctx.status = 500;
  }
};
