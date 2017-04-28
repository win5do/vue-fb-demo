let express = require('express');
let goods =require('../controls/goods');

let router = express.Router();

router.get('/goods-list', goods.getGoodsList);
router.get('/goods/:id', goods.getOneGoods);
router.get('/goods-add', goods.addGood);
router.get('/goods-delete', goods.deleteGood);

module.exports = router;