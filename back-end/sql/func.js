let mysql = require('mysql');
let db = require('../configs/db');
let pool = mysql.createPool(db);

module.exports = {
    connPool (cla, val, cb) {
        pool.getConnection((err, conn) => {
            let q = conn.query(cla, val, (err, rows, f) => {
                if (err) throw err;
                console.log(rows);

                cb(rows);
                console.log(q);

                conn.release();
            });
        });
    }
};