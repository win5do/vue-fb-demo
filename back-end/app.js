let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let mysql = require('mysql');
let db = require('./configs/db');
let Goods = require('./routes/goods');

let pool = mysql.createPool(db);

let port = process.env.PORT || 9999;
let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', Goods);
app.listen(port);
console.log(`devServer start on port:${ port}`);