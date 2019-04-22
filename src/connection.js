class connection{
    constructor(){
        const WebSocket = require('ws');  
        this.ws = new WebSocket('ws://localhost:8080/CRServer/websocket');
    }
    
    setUpConnection(){
        //const WebSocket = require('ws');
        //this.ws = new WebSocket('ws://localhost:8080/CRServer/websocket');
        
        this.sendMessage("connect to server");

        this.reciveMessage();

        this.connectionClose();

        this.connectionError();
    }

    connectionError(){
        this.ws.on('error', function error() {
            console.log("connection error");
        });
    }

    connectionClose(){
        this.ws.on('close', function close() {
            console.log("connection closed");
        });
    }

    sendMessage(str){
        this.ws.on('open', function open() {
            console.log("message will be sent: " + str);
            this.ws.send(str);
        });
    }

    messageHandler(data){
        console.log(data);
    }

    reciveMessage(){
        this.ws.on('message', function messageHandler(data){
            console.log(data);
        });
    }



    conn4(){
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
}
module.exports = connection;