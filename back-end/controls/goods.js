let mysql = require('mysql');
let db = require('../configs/db');
let sql = require('../sql/sql');
let moment = require('moment');

let pool = mysql.createPool(db);

function formatDate(rows) {
    return rows.map(row => {
        let date = moment(row.create_time).format('YYYY-MM-DD');
        return Object.assign({}, row, {create_time: date});
    });
}

module.exports = {
    // 获取商品列表
    getGoodsList (req, res) {
        pool.getConnection((err, conn) => {
            conn.query(sql.queryAll, 'goods', (err, rows) => {
                if (err) throw err;

                rows = formatDate(rows);
                res.json(rows);

                conn.release();
            });
        });
    },

    // 获取商品详情
    getOneGoods (req, res) {
        let id = req.params.id;
        pool.getConnection((err, conn) => {
            conn.query(sql.queryById, ['goods', id], (err, rows) => {
                if (err) throw err;

                rows = formatDate(rows);
                res.json(rows);

                conn.release();
            });
        });
    },

    // 添加商品
    addGoods (req, res) {
        let name = req.body.name;
        let price = req.body.price;
        let arr = [name, price];

        pool.getConnection((err, conn) => {
            conn.query('INSERT INTO goods(name, price) VALUES(?,?)', arr, (err, rows) => {
                if (err) throw err;
                console.log(rows);
                res.status(201).send('done');

                conn.release();
            });
        });
    },

    // 删除商品
    deleteGoods (req, res) {

        let id = req.body.id;

        pool.getConnection((err, conn) => {
            conn.query(sql.del, ['goods', id], (err, rows) => {
                if (err) throw err;
                console.log(rows);
                res.status(201).send('done');
                conn.release();
            });
        });
    },
};