var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');
app.listen(port)

console.log('服务启动中， 地址： http://127.0.0.1:' + port)

// route
// index
app.get('/', function(req, res) {
    res.render('index', {
        title: '未来电影首页'
    })
})

// detail
app.get('/detail', function(req, res) {
    res.render('detail', {
        title: '未来电影 详情页'
    })
})

// list
app.get('/list', function(req, res) {
    res.render('list', {
        title: '未来电影 列表页'
    })
})
// admin
app.get('/admin', function(req, res) {
    res.render('admin', {
        title: '未来电影 后台管理'
    })
})