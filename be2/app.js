var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//路由
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

//配置ejs视图引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine',"ejs")


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//静态资源托管
app.use("/", function (req, res, next) {
  //获取ip地址
  console.log(req.connection.remoteAddress)
  next()
})
app.use(express.static(path.join(__dirname, 'public')));
//console.log("====", path.join("cxk","views")) //起到连接路径的作用 会把\解析成当前系统匹配的\;
//console.log("=====", path.resolve("../haha"))//解析当前文件的绝对路劲 并且会和传入的路径拼接
app.use(express.static(path.resolve("webServer")))
app.use('/hello', indexRouter);
app.use('/users', usersRouter);
module.exports = app;
