const vscode = require('vscode');
module.exports = function(context) {
    // 注册HelloWord命令
    context.subscriptions.push(vscode.commands.registerCommand('extension.sayHello', () => {
        //vscode.window.showInformationMessage('Hello World!');
        vscode.window.showInputBox(
            { // 这个对象中所有参数都是可选参数
                password:false, // 输入内容是否是密码
                ignoreFocusOut:true, // 默认false，设置为true时鼠标点击别的地方输入框不会消失
                placeHolder:'Please Input your Query', // 在输入框内的提示信息
                //prompt:'code recommendation', // 在输入框下方的提示信息
                //validateInput:function(text){return text;} // 对输入内容进行验证并返回
            }).then(function(msg){
            console.log("user input："+msg);
            //conn();
            //conn2();
            //conn3();
            //conn4();

            //var connectionClass = require('./connection');
            //var connection = new connectionClass();
            //connection.setUpConnection();
            //connection.sendMessage(msg);

            var myDate = new Date();
            var t1 = myDate.getTime();
            const WebSocket = require('ws');
            const ws = new WebSocket('ws://localhost:8080/CRServer/websocket');
            ws.on('open', function open() {
                ws.send(msg);
            });
            ws.on('message', function incoming(data) {
                console.log("get message: " + data);
                ws.close();
            });
            var myDate2 = new Date();
            var t2 = myDate2.getTime();
            console.log(t1);
            console.log(t2);
            console.log(t2-t1);
        });
    }));
};
function conn(){
    var ws = require("nodejs-websocket");
    console.log("开始建立连接...")

    var client = ws.connect("ws://localhost:8080/CRServer/websocket", function(conn){
        conn.on("text", function (str) {
            console.log("收到的信息为:"+str)
    
            conn.sendText(str)
        });
        conn.on("message", function (str){
            console.log(str);
        });
        conn.on("close", function (code, reason) {
            console.log("关闭连接")
        });
        conn.on("error", function (code, reason) {
            console.log("异常关闭")
        });
        conn.on("connect", function(){
            console.log("WebSocket建立完毕");
            client.sendText("1111111111111111111111111111111");
        });
    },function(conn){

    })
    client.doRead();
    //client.readyState = 1;
    console.log(client.readyState);
}

function conn2(){
    var sys = require('util');
    var WebSocket = require('websocket-client').WebSocket;
    
    var ws = new WebSocket('ws://localhost:8080/CRServer', 'websocket');
    ws.addListener('data', function(buf) {
        sys.debug('Got data: ' + sys.inspect(buf));
    });
    ws.onmessage = function(m) {
        sys.debug('Got message: ' + m);
    }
}

function conn3(){
    var WebSocketClient = require('websocket').client;

    var client = new WebSocketClient();
    client.connect('ws://localhost:8080/','CRServer');

    client.on('connectFailed', function(error) {
        console.log('Connect Error: ' + error.toString());
    });

    client.on('connect', function(connection) {
        console.log('WebSocket client connected');
        connection.on('error', function(error) {
            console.log("Connection Error: " + error.toString());
        });
        connection.on('close', function() {
            console.log('echo-protocol Connection Closed');
        });
        connection.on('message', function(message) {
            console.log("Received: '" + message.utf8Data + "'");
        });
    });
}

function conn4(){
    const WebSocket = require('ws');

    const ws = new WebSocket('ws://localhost:8080/CRServer/websocket');

    ws.on('open', function open() {
        ws.send('something');
    });

    ws.on('message', function incoming(data) {
        console.log(data);
    });

    ws.on('open', function open() {
        ws.send('something2222');
    });
}