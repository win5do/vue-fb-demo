let mysql = require('mysql');
let db = require('../configs/db');
let sql = require('../sql/sql');
let moment = require('moment');

let pool = mysql.createPool(db);

function formatDate(rows) {
    return rows.map(row => {
        let date = moment(row.create_time).format('YYYY-MM-DD');
        let obj = {};

        switch (row.role) {
            case 1:
                obj.role = '普通用户';
                break;
            case 2:
                obj.role = '管理员';
                break;
            case 100:
                obj.role = '超级管理员';
        }

        delete row.password;

        return Object.assign({}, row, {create_time: date}, obj);
    });
}

module.exports = {
    // 登录
    login () {
    },

    // 注销
    logout () {
    },

    // 权限变更
    changeRole () {
    },

    fetchAll (req, res) {
        pool.getConnection((err, conn) => {
            conn.query(sql.queryAll, 'user', (err, rows) => {
                if (err) throw err;

                rows = formatDate(rows);
                res.json(rows);

                conn.release();
            });
        });
    },

    // 添加用户
    addOne (req, res) {
        let name = req.body.name;
        let pass = req.body.pass;
        let role = req.body.role;
        let query, arr;

        query = 'INSERT INTO user(name, password, role) VALUES(?, ?, ?)';
        arr = [name, pass, role];

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
            conn.query(sql.del, ['user', id], (err, rows) => {
                if (err) throw err;

                console.log(rows);
                res.status(201).send('done');

                conn.release();
            });
        });
    },

    // 批量删除
    goodsDeleteMulti (req, res) {
        let id = req.body.id;

        pool.getConnection((err, conn) => {
            let query = conn.query(`DELETE FROM user WHERE id IN ?`, [[id]], (err, rows) => {
                if (err) throw err;

                res.status(201).send('done');

                conn.release();
            });

            console.log(query.sql);
        });
    },
};