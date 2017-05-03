let mysql = require('mysql');
let db = require('../configs/db');
let sql = require('../sql/sql');
let moment = require('moment');
let bcrypt = require('bcryptjs');

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
        let query = 'INSERT INTO user(user_name, password, role) VALUES(?, ?, ?)';

        // 密码加盐
        bcrypt.hash(pass, 10, (err, hash) => {
            if (err) console.log(err);

            pass = hash;

            let arr = [name, pass, role];

            pool.getConnection((err, conn) => {
                conn.query(query, arr, (err, rows) => {
                    if (err) throw err;

                    res.status(201).send('done');

                    conn.release();
                });
            });
        });

    },


    // 删除用户
    deleteOne (req, res) {

        let id = req.body.id;

        pool.getConnection((err, conn) => {
            conn.query(sql.del, ['user', id], (err, rows) => {
                if (err) throw err;

                res.status(201).send('done');

                conn.release();
            });
        });
    },

    // 批量删除
    deleteMulti (req, res) {
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

    // 登录
    login (req, res) {

        let user_name = req.body.user_name;
        let pass = req.body.pass;

        pool.getConnection((err, conn) => {
            conn.query('SELECT * from user where user_name = ?', [user_name], (err, rows) => {
                if (err) throw err;

                if (!rows.length) {
                    res.status(401).send('用户名不存在');

                    conn.release();

                    return;
                }

                let password = rows[0].password;

                bcrypt.compare(pass, password, (err, sure) => {
                    if (sure) {
                        let user = {
                            user_id: rows[0].Id,
                            role: rows[0].role,
                        };

                        req.session.login = user;

                        console.log(req.session.login);

                        res.status(201).json(user);
                    } else {
                        res.status(301).send('密码错误');
                    }

                    conn.release();
                });

            });
        });
    },

    // 后台网站好像不需要注册
    // 注册
    // register (req, res) {
    //     let user_name = req.body.user_name;
    //     let pass = req.body.pass;
    // },

    // 自动登录
    autoLogin (req, res) {

        if (req.session.login) {
            res.status(201).send('自动登录');

        } else {

            res.status(401).send('not found');
        }
    },

    // 注销
    logout (req, res) {
        req.session = null;

        res.status(201).send('done');
    },

    // 权限控制
    controlVisit (req, res, next) {
        if (req.session.login.role && req.session.login.role < 10) {
            res.send('权限不够');
            return;
        }

        next();
    },

    // 权限变更
    changeRole () {
        let user_role = req.body.user_role; // 操作者role
        if (user_role < 10) {
            res.status(400).end();
        }

        let role = req.body.role;
        let user_name = req.body.user_name;
    },

};