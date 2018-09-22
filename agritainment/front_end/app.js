var express = require('express');
var app = express();
var path = require('path');
var fs = require("fs");
var bodyParser = require('body-parser');
//handle request entity too large
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));
//设置静态文件
app.use(express.static('public'));
//设置html引擎
app.set('view engine', 'html');
//设置视图地址
app.set('views', path.join(__dirname, '/views'));
//设置html引擎
app.engine('html', require('ejs').__express);

var urlencodedParser=bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);

//登录注册
var userController = require('./controllers/UserController');
app.get('/login', userController.login);
app.post('/login_in', userController.login_in);
app.post('/register', userController.register);


//首页
var indexController = require('./controllers/IndexController');
app.get('/index', indexController.index);



app.listen(8888);