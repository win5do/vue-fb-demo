let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let router = require('./routes/router');

let port = process.env.PORT || 9999;
let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', router);
app.listen(port, () => {
    console.log(`devServer start on port:${ port}`);
});