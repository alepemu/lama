'use strict';

const Router = require('koa-router');
const router = new Router();

const userController = require('./controllers/controller.user');
const catController = require('./controllers/controller.cat');
const itemController = require('./controllers/controller.item');

router.post('/getuser', userController.getUser)
router.post('/user', userController.createUser)

router.post('/getcategory', catController.getCat);
router.post('/category', catController.createCat);
router.delete('/category', catController.deleteCat);
router.put('/category', catController.updateCat);

router.post('/getitem', itemController.getItem)
router.post('/item', itemController.createItem)
router.delete('/item', itemController.deleteItem)
router.put('/item', itemController.updateItem)

module.exports = router;
