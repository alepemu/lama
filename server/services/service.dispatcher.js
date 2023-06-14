'use strict';

const nodeCron = require('node-cron');

const { User, Category, Item } = require('../models/models');
const { mailAll, mailItem } = require('./service.email');

async function itemsWithDate() {
  const items = await Item.find();
  return items.filter((el) => el.start_date !== null);
}

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

    console.log('One email programmed');
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
    // Every minute:
    // nodeCron.schedule(`* * * * *`, () => mailAll(users[i])).start();
    // Every (notif_few) week(s) on Monday at 0900:
    nodeCron.schedule(`0 9 * * 1 */${users[i].notif_freq}`, () => mailAll(users[i])).start();
  }
}

// It needs some testing before
// programAll();
