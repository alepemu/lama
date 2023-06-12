'use strict';

const nodeCron = require('node-cron');

const { User, Category, Item } = require('../models/models');
const { mailItem } = require('./service.email');

async function itemsWithDate() {
  const items = await Item.find();
  //   console.log(items);
  return items.filter((el) => el.start_date !== null);
}

async function programItems() {
  const msgs = await itemsWithDate();
  //   console.log(msgs);

  for (let i = 0; i < msgs.length; i++) {
    const cat = await Category.findOne(msgs[i].parent);
    const user = await User.findOne(cat.owner);

    const dt = new Date(msgs[i]);
    const min = dt.getMinutes();
    const hour = dt.getHours();
    const day = dt.getDate();
    const month = dt.getMonth();

    const itemData = {
      name: user.name,
      email: user.email,
      title: msgs[i].title,
      start_date: msgs[i].start_date,
    };

    // nodeCron.schedule(`00 ${min} ${hour} ${day} ${month} *`, mailItem(itemData)).start();
  }
}

programItems();
