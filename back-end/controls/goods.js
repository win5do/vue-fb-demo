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
    fetchAll (req, res) {
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
    fetchById (req, res) {
        let id = req.body.id;
        pool.getConnection((err, conn) => {
            conn.query(sql.queryById, ['goods', id], (err, rows) => {
                if (err) throw err;

                rows = formatDate(rows);
                res.json(rows[0]);

                conn.release();
            });
        });
    },

    // 添加|更新 商品
    addOne (req, res) {
        let id = req.body.id;
        console.log(id);
        let name = req.body.name;
        let price = req.body.price;
        let query, arr;

        if (id) {
            // 更新
            query = 'UPDATE goods SET name=?, price=? WHERE id=?';
            arr = [name, price, id];
        } else {
            // 新增
            query = 'INSERT INTO goods(name, price) VALUES(?,?)';
            arr = [name, price];
        }
        pool.getConnection((err, conn) => {
            conn.query(query, arr, (err, rows) => {
                if (err) throw err;

                res.status(201).send('done');

                conn.release();
            });
        });
    },


    // 删除商品
    deleteOne (req, res) {

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

    // 批量删除
    deleteMulti (req, res) {
        let id = req.body.id;

        pool.getConnection((err, conn) => {
            let query = conn.query(`DELETE FROM goods WHERE id IN ?`, [[id]], (err, rows) => {
                if (err) throw err;

                res.status(201).send('done');

                conn.release();
            });

            console.log(query.sql);
        });
    },

};