let mysql = require('mysql');
let db = require('./configs/db');
let pool = mysql.createPool(db);