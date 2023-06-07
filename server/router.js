'use strict';

const Router = require('koa-router');
const router = new Router();

const { User, Category, Item } = require('./models/models');
const userController = require('./controllers/controller.user');
const catController = require('./controllers/controller.cat');
const itemController = require('./controllers/controller.item');

router.post('/category', catController.createCat);
router.delete('/category', catController.deleteCat);
router.put('/category', catController.updateCat);


module.exports = router;
