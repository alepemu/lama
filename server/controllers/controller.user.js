'use strict';

const bcrypt = require('bcrypt');
const { User } = require('../models/models');
const { programUser } = require('../services/service.dispatcher')

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
    // { "name", "email", "password" }
    const { name, email, password } = ctx.request.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hash });
    const userObject = user.toObject();
    delete userObject.password;
    ctx.body = userObject;
    ctx.status = 201;
  } catch (error) {
    ctx.body = { error, message: 'Could not create user' };
    ctx.status = 400;
  }
};

exports.logIn = async (ctx) => {
  try {
    // { "email", "password" }
    const { email, password } = ctx.request.body;
    const user = await User.findOne({ email });
    const validatedPass = await bcrypt.compare(password, user.password);
    if (!validatedPass) throw new Error();
    const userObject = user.toObject();
    delete userObject.password;
    ctx.session.uid = user._id;
    ctx.body = userObject;
    ctx.status = 202;
  } catch (error) {
    ctx.body = { error, message: 'Username or/and password is incorrect' };
    ctx.status = 401;
  }
};

exports.logOut = async (ctx) => {
  try {
    ctx.session.uid = null;
  } catch (error) {
    ctx.body = { error, message: 'Error when logging out' };
    ctx.status = 401;
  }
};

exports.updateUser = async (ctx) => {
  try {
    // { USER }
    const userChanges = ctx.request.body;
    const userId = userChanges._id;
    const updatedUser = await User.findByIdAndUpdate(userId, { $set: userChanges }, { new: true });

    // If notif_due on --> Turn them ON
    if (updatedUser.notif_due) {
      console.log('programa!');
      programUser(updatedUser)
    }

    // If notif_due ff --> Turn them OFF
    if (!updatedUser.notif_due) {
      console.log('quita!');
    }

    // If notif_opt on --> Turn them ON
    // If notif_opt ff --> Turn them OFF

    ctx.body = updatedUser;
    ctx.status = 202;
  } catch (error) {
    ctx.body = { error, message: 'Failed to update user' };
    ctx.status = 500;
  }
};
