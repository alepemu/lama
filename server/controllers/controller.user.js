'use strict';

const { User } = require('../models/models');

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
