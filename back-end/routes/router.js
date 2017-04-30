let express = require('express');
let goods =require('../controls/goods');

let router = express.Router();

router.get('/goods-list', goods.getGoodsList);
router.post('/goods-detail', goods.getOneGoods);
router.post('/goods-add', goods.addGoods);
router.post('/goods-delete', goods.deleteGoods);

module.exports = router;