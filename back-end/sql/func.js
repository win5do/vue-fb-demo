let mysql = require('mysql');
let db = require('../configs/db');
let pool = mysql.createPool(db);

module.exports = {
    async connPool (cla, val, cb) {
        pool.getConnection((err, conn) => {
            conn.query(cla, val, (err, rows) => {
                if (err) throw err;

                await cb(rows);

                conn.release();
            });
        });
    }
};