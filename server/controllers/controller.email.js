'use strict';

const { mailerSend } = require('../services/service.email');
const { User, Category, Item } = require('../models/models');

exports.sendEmail = async (ctx) => {
  try {
      const userId = ctx.params.userid;
    // const userId = '6480a98535fbc7221e4f2eb2';
    const userData = await User.findById(userId);
    mailerSend(userData);
    ctx.body = 'sucess';
    ctx.status = 200;
  } catch (error) {
    ctx.body = error.message;
    ctx.status = 500;
  }
};
