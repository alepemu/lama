'use strict';

const { User } = require('../models/models');

exports.getUserById = async (ctx) => {
  try {
    const userId = ctx.params.id;
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

exports.logIn = async (ctx) => {
  try {
    // {"email": "email@email.com", "password": "qwerty"}
    const loginDetails = ctx.request.body;
    const user = await User.findOne({ email: loginDetails.email });
    if (loginDetails.password !== user.password) throw new Error();
    ctx.body = user;
    ctx.status = 200;

    // const validatedPass = await bcrypt.compare(password, user.password);
    // if (!validatedPass) throw new Error();
    // req.session.uid = user._id;
  } catch (error) {
    ctx.body = error.message;
    ctx.status = 401;
  }
};
