'use strict';

const { User, Category } = require('../models/models');

exports.createCat = async (ctx) => {
  try {
    // { "userId": "6480a98535fbc7221e4f2eb2",
    // "content": { "name":"test2", "color":"default" } }
    const userId = ctx.request.body.userId;
    const content = ctx.request.body.content;
    const newCat = await Category.create(content);
    const user = await User.findById(userId);
    const newCatList = [...user.categories, newCat._id];
    ctx.body = await User.findByIdAndUpdate(userId, { $set: { categories: newCatList } });
    ctx.status = 200;
  } catch (error) {
    ctx.body = error.message;
    ctx.status = 500;
  }
};

exports.deleteCat = async (ctx) => {
  try {
    // { "userId": "6480a98535fbc7221e4f2eb2",
    //   "catId": "..." }
    const userId = ctx.request.body.userId;
    const catId = ctx.request.body.catId;
    const deletedCategory = await Category.findByIdAndDelete(catId);
    const user = await User.findById(userId);
    const isCategory = (cat) => cat._id === catId;
    const catIndex = user.categories.findIndex(isCategory);
    user.categories.splice(catIndex, 1);
    ctx.body = await User.findByIdAndUpdate(userId, { $set: { categories: user.categories } });
    ctx.status = 200;
  } catch (error) {
    ctx.body = error.message;
    ctx.status = 500;
  }
};

exports.updateCat = async (ctx) => {
  try {
    // { "_id": "6480b01df511c7b079b0cf75",
    //   "name": "Household v2",
    //   "color": "yellow" }
    const catChanges = ctx.request.body;
    const catId = catChanges._id;
    ctx.body = await Category.findByIdAndUpdate(catId, { $set: catChanges });
    ctx.status = 200;
  } catch (error) {
    ctx.body = error.message;
    ctx.status = 500;
  }
};
