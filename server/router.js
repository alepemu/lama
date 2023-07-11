'use strict';

const Router = require('koa-router');
const router = new Router();

const userController = require('./controllers/controller.user');
const catController = require('./controllers/controller.cat');
const itemController = require('./controllers/controller.item');
const emailController = require('./controllers/controller.email');
const aiController = require('./controllers/controller.ai');

router.get('/health', (ctx) => { ctx.body = 'Hello LAMA'})

router.get('/user/:id', userController.getUserById);
router.post('/register', userController.registerUser);
router.post('/login', userController.logIn);
router.put('/user', userController.updateUser);

router.get('/category/:id', catController.getCatById);
router.post('/category', catController.createCat);
router.delete('/category', catController.deleteCat);
router.put('/category', catController.updateCat);

router.get('/item/:id', itemController.getItemById);
router.post('/item', itemController.createItem);
router.delete('/item', itemController.deleteItem);
router.put('/item', itemController.updateItem);

router.get('/email/:userid', emailController.sendEmail);

router.post('/chat', aiController.sendMessage);

module.exports = router;
