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

exports.registerUser = async (ctx) => {
  try {
    // {"name": "Test", "email": "email@email.com", "password": "qwerty"}
    const userData = ctx.request.body;
    ctx.body = await User.create(userData);
    ctx.status = 200;
  } catch (error) {
    ctx.body = { error, message: 'Could not create user' };
    ctx.status = 400;
  }
};

exports.logIn = async (ctx) => {
  try {
    // {"email": "email@email.com", "password": "qwerty"}
    const loginDetails = ctx.request.body;
    const user = await User.findOne({ email: loginDetails.email });
    if (loginDetails.password !== user.password) throw new Error();
    ctx.session.uid = user._id.toString();
    // to string??
    // console.log(ctx.session);
    ctx.body = user;
    ctx.status = 200;

    // const validatedPass = await bcrypt.compare(password, user.password);
    // if (!validatedPass) throw new Error();
  } catch (error) {
    ctx.body = { error, message: 'Username or/and password is incorrect' };
    ctx.status = 401;
  }
};
