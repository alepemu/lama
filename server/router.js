'use strict';

const Router = require('koa-router');
const router = new Router();

const userController = require('./controllers/controller.user');
const catController = require('./controllers/controller.cat');
const itemController = require('./controllers/controller.item');
const emailController = require('./controllers/controller.email')

router.get('/user/:id', userController.getUserById)
router.post('/user', userController.createUser)
router.post('/login', userController.logIn)

router.get('/category/:id', catController.getCatById);
router.post('/category', catController.createCat);
router.delete('/category', catController.deleteCat);
router.put('/category', catController.updateCat);

router.get('/item/:id', itemController.getItemById)
router.post('/item', itemController.createItem)
router.delete('/item', itemController.deleteItem)
router.put('/item', itemController.updateItem)

router.get('/email/:userid', emailController.sendEmail)

module.exports = router;
