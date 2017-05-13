let mysql = require('mysql');
let db = require('../configs/db');
let pool = mysql.createPool(db);

module.exports = {
    connPool (cla, val, cb) {
        pool.getConnection((err, conn) => {
            let q = conn.query(cla, val, (err, rows) => {

                if (err) {
                    console.log(err);
                }

                console.log(q.sql);

                cb(rows);

                conn.release();
            });
        });
    },

    // json格式
    writeJson(res, code = 200, msg = 'ok', data = null) {
        let obj = {code, msg, data};

        if (!data) {
            delete obj.data;
        }

        res.send(obj);
    },
};