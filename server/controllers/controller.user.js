"use strict";

const bcrypt = require("bcrypt");
const { User } = require("../models/models");
const { programUser } = require("../services/service.dispatcher");
const jwt = require("jsonwebtoken");

exports.getUserById = async (ctx) => {
  try {
    console.log("aqui");
    const userId = ctx.params.id;
    console.log("params", userId);
    const user = await User.findById(userId);
    console.log("user", user);
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
    ctx.body = { error, message: "Could not create user" };
    ctx.status = 400;
  }
};

exports.logIn = async (ctx) => {
  try {
    // { "email", "password" }
    const { email, password } = ctx.request.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error();
    } else {
      const validatedPass = await bcrypt.compare(password, user.password);
      if (!validatedPass) {
        throw new Error();
      } else {
        const userObject = user.toObject();
        delete userObject.password;
        const token = jwt.sign({ id: userObject._id }, "shared-secret");
        ctx.body = { ...userObject, token };
        ctx.status = 202;
      }
    }
  } catch (error) {
    ctx.body = { error, message: "Username or/and password is incorrect" };
    ctx.status = 401;
  }
};

exports.logOut = async (ctx) => {
  try {
    // if (ctx.session.id) {

    ctx.body = "Logged out succesfully";
    ctx.status = 200;
    // } else {
    // ctx.body = 'No user currently logged';
    // ctx.status = 200;
    // }
  } catch (error) {
    ctx.body = { error, message: "Error when logging out" };
    ctx.status = 401;
  }
};

exports.updateUser = async (ctx) => {
  try {
    // { USER }
    const userChanges = ctx.request.body;
    const userId = userChanges._id;
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: userChanges },
      { new: true }
    );

    // If notif_due on --> Turn them ON
    if (updatedUser.notif_due) {
      console.log("programa!");
      programUser(updatedUser);
    }

    // If notif_due ff --> Turn them OFF
    if (!updatedUser.notif_due) {
      console.log("quitalo!");
    }

    // If notif_opt on --> Turn them ON
    // If notif_opt ff --> Turn them OFF

    ctx.body = updatedUser;
    ctx.status = 202;
  } catch (error) {
    ctx.body = { error, message: "Failed to update user" };
    ctx.status = 500;
  }
};
