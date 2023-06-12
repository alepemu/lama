'use strict';

const bcrypt = require('bcrypt');
// const SECRET_KEY = process.env.SECRET_KEY || 'not secure!';

const { User } = require('../models/models');

exports.getUserById = async (ctx) => {
  try {
    const userId = ctx.params.id;
    const user = await User.findById(userId);
    const userObject = user.toObject();
    delete userObject.password;
    ctx.body = userObject;
    ctx.status = 200;
  } catch (error) {
    ctx.body = error.message;
    ctx.status = 500;
  }
};

exports.registerUser = async (ctx) => {
  try {
    // {"name": "Test", "email": "email@email.com", "password": "qwerty"}
    const { name, email, password } = ctx.request.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hash });
    const userObject = user.toObject();
    delete userObject.password;
    ctx.body = userObject;
    ctx.status = 200;
  } catch (error) {
    ctx.body = { error, message: 'Could not create user' };
    ctx.status = 400;
  }
};

exports.logIn = async (ctx) => {
  try {
    // {"email": "email@email.com", "password": "qwerty"}
    const { email, password } = ctx.request.body;
    const user = await User.findOne({ email });
    const validatedPass = await bcrypt.compare(password, user.password);
    if (!validatedPass) throw new Error();
    // if (password !== user.password) throw new Error();
    // ctx.session.uid = user._id.toString();
    // to string??
    const userObject = user.toObject();
    delete userObject.password;
    console.log(userObject);
    ctx.body = userObject;
    ctx.status = 200;
  } catch (error) {
    ctx.body = { error, message: 'Username or/and password is incorrect' };
    ctx.status = 401;
  }
};
