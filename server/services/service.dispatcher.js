'use strict';

const nodeCron = require('node-cron');

const { User, Category, Item } = require('../models/models');
const { mailItem } = require('./service.email');

async function itemsWithDate() {
  const items = await Item.find();
  return items.filter((el) => el.start_date !== null);
}

console.log(Date.now());

async function programItems() {
  const msgs = await itemsWithDate();

  for (let i = 0; i < msgs.length; i++) {
    if (msgs[i].start_date < Date.now()) continue;

    const cat = await Category.findOne(msgs[i].parent);
    const user = await User.findOne(cat.owner);

    if (user.notif_due === false) continue;

    const dt = new Date(msgs[i].start_date);
    const min = dt.getMinutes();
    const hour = dt.getHours();
    const day = dt.getDate();
    const month = dt.getMonth() + 1;

    const itemData = {
      name: user.name,
      email: user.email,
      title: msgs[i].title,
      start_date: msgs[i].start_date,
    };

    console.log('Email to be sent', itemData.title, 'on', itemData.start_date);
    nodeCron.schedule(`00 ${min} ${hour} ${day} ${month} *`, () => mailItem(itemData)).start();
  }
}

programItems();

async function usersWithOpt() {
  const users = await User.find();
  return users.filter((user) => user.notif_opt === true);
}

async function programAll() {
  const users = await usersWithOpt();

  for (let i = 0; i < users.length; i++) {
    console.log('every 1 min email order sent');
    nodeCron.schedule(`0 */1 * * * *`, () => mailAll(users[i])).start();
    // nodeCron.schedule(`00 00 09 ${users[i].notif_freq || 1 * 7} * *`, () => mailAll(users[i])).start();
  }
}

programAll();
