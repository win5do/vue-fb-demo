let mysql = require('mysql');
let db = require('../configs/db');
let sql = require('../sql/sql');

let pool = mysql.createPool(db);

module.exports = {

    // 获取商品列表
    getGoodsList (req, res) {
        pool.getConnection((err, conn) => {
            conn.query(sql.queryAll, 'goods', (err, back, fields) => {
                console.log(fields);
                res.json(back);
                conn.release();
                if (err) throw err;
            });
        });
    },

    // 获取商品详情
    getOneGoods (req, res) {
        let id = req.body.id;
        pool.getConnection((err, conn) => {
            conn.query(sql.queryById, ['goods', id], (err, back) => {
                if (err) throw err;
                res.json(back);
                conn.release();
            });
        });
    },

    // 添加商品
    addGood (req, res) {
        let name = req.query.name;
        let price = req.query.price;
        let arr = [name, price];
        // let keys = Object.keys(_good);
        // keys.forEach(el => {
        //     arr.push(_good.el);
        // });

        pool.getConnection((err, conn) => {
            conn.query('INSERT INTO goods(name, price) VALUES(?,?)', arr, (err, back) => {
                if (err) throw err;
                console.log(back);
                res.json(back);
                conn.release();
            });
        });
    },

    // 删除商品
    deleteGood (req, res) {

        let id = req.query.id;

        pool.getConnection((err, conn) => {
            conn.query(sql.del, ['goods', id], (err, back) => {
                if (err) throw err;
                console.log(back);
                res.json(back);
                conn.release();
            });
        });
    },
};