const vscode = require('vscode');
var myDate = new Date();
var t1 = myDate.getTime();
const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:8080/CRServer/websocket');
ws.on('open', function open() {
    ws.send(vscode.window.activeTextEditor.document.getText());
});
ws.on('message', function incoming(data) {
    console.log("get message: " + data);
    //ws.close();
});
var myDate2 = new Date();
var t2 = myDate2.getTime();
console.log(t1);
console.log(t2);
console.log(t2-t1);