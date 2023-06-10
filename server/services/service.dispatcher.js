const nodeCron = require('node-cron');

const { Item } = require('../models/models');
const { mailItem } = require('./service.email');

// Fetch all the items and filter those who have a start_date property
// [{ title: "content", date: date}]
Item.find()
  .then((response) => response.filter((el) => el.start_date !== null))
  .then((res) => console.log(res));

// async function sth() {
//   const items = await Item.find();
//   console.log(items);
//   return items.filter((el) => el.start_date !== null);
// }

// const list = sth();
// console.log(list);
// console.log('hello');

// Add the owners
// [{ date: date, content :{ name: "Paco", email: "email@email", title: "content"}}]
const msgs = [];

// loop through the array and trigger a nodeCron function for each one of them
for (let i = 0; i < msgs.length; i++) {
  const min = getMinutes(msgs[i].date);
  const hour = getHours(msgs[i].date);
  const day = getDate(msgs[i].date);
  const month = getmonth(msgs[i].date);
  nodeCron.schedule(`00 ${min} ${hour} ${day} ${month} *`, mailItem(msgs[i].content)).start();
}
