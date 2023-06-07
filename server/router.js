'use strict';

const Router = require('koa-router');
const router = new Router();

const { User, Category, Item } = require('./models/models');

router.get('/', async (ctx) => {
  try {
    // 1. CREATE USER
    // const createdUser = await User.create({name: 'Paco', email: "email@email.com", password: "1234"});
 
    // 2. CREATE CATEGORY ASSOCIATED TO USER
    // const newCat = await Category.create({ name: 'Household', color: 'default' }); // Create category
    // const id = '6480a98535fbc7221e4f2eb2'; // User id
    // const user = await User.findById(id); // Find user by id
    // const newCatList = [...user.categories, newCat._id]; // Update category list
    // const updatedUser = await User.findByIdAndUpdate(id, { $set: { categories: newCatList } });
  
    // DELETE CATEGORY FROM USER AND COLLECTION
    // const catId = '6480afdaf9213a33d68405f2'; // Category id
    // const deletedCategory = await Category.findByIdAndDelete(catId); // Remove category
    // const id = '6480a98535fbc7221e4f2eb2'; // User id
    // const user = await User.findById(id); // Find user by id
    // const isCategory = (cat) => cat._id === catId; // To filter the cat in array
    // const catIndex = user.categories.findIndex(isCategory); // Find index
    // user.categories.splice(catIndex, 1); // Remove category from array
    // const updatedUser = await User.findByIdAndUpdate(id, { $set: { categories: user.categories } });
  
    // UPDATE CATEGORY
    // const catId = '6480b01df511c7b079b0cf75'; // Category id
    // const newColor = 'red' // New color
    // const updatedCat = await Category.findByIdAndUpdate(catId, { $set: { color: newColor } });
   
    // 3. CREATE ITEM ASSOCIATED TO CATEGORY
    // const newItem = await Item.create({
    //   title: 'Change toothbrush',
    //   frequency: 123456789,
    //   start_date: 98765432100,
    //   checked: false,
    // }); // Create item
    // const catId = '6480b01df511c7b079b0cf75'; // Category id
    // const category = await Category.findById(catId); // Find category by id
    // const newItemList = [...category.items, newItem._id]; // Update category list
    // const updatedCategory = await Category.findByIdAndUpdate(catId, { $set: { items: newItemList } });
   
    // DELETE ITEM FROM CATEGORY AND COLECTION
   
    // UPDATE ITEM
   
    // ctx.status = 200;
  } catch (error) {
    ctx.body = error.message;
    ctx.status = 500;
  }
});

module.exports = router;
