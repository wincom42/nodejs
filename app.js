var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var multer = require('multer');


var app = express();
var upload = multer();

app.set('view engine', 'ejs');
app.set('views','./views');
app.use('/public', express.static('public'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(upload.array());
app.use(cookieParser())

var middleware = require('./middleware/middleware.js');
var router = require('./router/router.js');

app.use('/',middleware);
app.use('/',router);



app.listen(3000);