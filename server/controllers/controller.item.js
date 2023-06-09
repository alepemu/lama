'use strict';

const { Category, Item } = require('../models/models');

exports.getItemById = async (ctx) => {
  try {
    const itemId = ctx.params.id;
    ctx.body = await Item.findById(itemId);
    ctx.status = 200;
  } catch (error) {
    ctx.body = error.message;
    ctx.status = 500;
  }
};

exports.createItem = async (ctx) => {
  try {
    // {"catId": "6480b01df511c7b079b0cf75",
    // "content":{"title": "Test",
    // "frequency": "123456789",
    // "start_date": "98765432100",
    // "checked": "false"}}
    const catId = ctx.request.body.catId;
    const content = ctx.request.body.content;
    const newItem = await Item.create(content);
    const cat = await Category.findById(catId);
    const newItemList = [...cat.items, newItem._id];
    const updatedCat = await Category.findByIdAndUpdate(catId, { $set: { items: newItemList } });
    ctx.body = newItem;
    ctx.status = 200;
  } catch (error) {
    ctx.body = error.message;
    ctx.status = 500;
  }
};

exports.deleteItem = async (ctx) => {
  try {
    // { "catId": "6480b01df511c7b079b0cf75",
    //   "itemId": "..." }
    const catId = ctx.request.body.catId;
    const itemId = ctx.request.body.itemId;
    const category = await Category.findById(catId);
    const deletedItem = await Item.findByIdAndDelete(itemId);

    await Category.findByIdAndUpdate(catId, {
      $set: { items: category.items.filter((item) => item.toString() !== itemId) },
    });

    ctx.body = deletedItem;
    ctx.status = 200;
  } catch (error) {
    ctx.body = error.message;
    ctx.status = 500;
  }
};

exports.updateItem = async (ctx) => {
  try {
    // { "_id": "6480b443c49e7e82d60e7140",
    // "title": "Flip matress v2",
    // "start_date": "999999999999",
    // "frequency": "123456789",
    // "checked": "false" }
    const itemChanges = ctx.request.body;
    const itemId = itemChanges._id;
    const updatedItem = await Item.findByIdAndUpdate(itemId, { $set: itemChanges }, {new: true});
    ctx.body = updatedItem;
    ctx.status = 200;
  } catch (error) {
    ctx.body = error.message;
    ctx.status = 500;
  }
};
