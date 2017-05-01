let express = require('express');
let goods =require('../controls/goods');
let user =require('../controls/user');

let router = express.Router();

// goods
router.get('/goods-list', goods.fetchAll);
router.post('/goods-detail', goods.fetchById);
router.post('/goods-add', goods.addOne);
router.post('/goods-delete', goods.deleteOne);
router.post('/goods-delete-multi', goods.goodsDeleteMulti);

// user
router.get('/user-list', user.fetchAll);
router.post('/user-add', user.addOne);
router.post('/user-delete', user.deleteOne);
router.post('/user-delete-multi', user.goodsDeleteMulti);

module.exports = router;