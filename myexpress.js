var express = require("./server/node_modules/express");
var session=require("./server/node_modules/express-session");
var cookieParser = require('./server/node_modules/cookie-parser');
var ejs =require("./server/node_modules/ejs");
var partials = require("./server/node_modules/express-partials");
var userDao = require("./server/Dao/userDao.js");
var app = express();
app.set("port",4555);
app.configure(function(){
    app.use(cookieParser());
    app.use(session({
        secret:"1234",
        name:"testmysession",
        cookie:{maxAge:6000000}
    }));
    app.set("views", __dirname + "/client/views");// ��ͼĿ¼
    app.engine('html',ejs.__express);
    app.set("view engine", "html");//������ͼ����
    app.use(express.logger("dev"));
    app.use(express.bodyParser());   //post���������
    app.use(express.methodOverride());  //get.post����ת��
    app.use(app.router);    //·�ɷַ�
    app.use(express.static(__dirname+'/client'))    //��Ŀ¼
    //app.use(express.favicon (__dirname+'/client/image/logogreen.png'));
    app.use(express.errorHandler());    //��ʾ�����
    app.use(partials());
});
app.listen(app.get('port'),function(req,resp){

});