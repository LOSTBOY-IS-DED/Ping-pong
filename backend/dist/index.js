"use strict";
// import
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
// create server
const wss = new ws_1.WebSocketServer({ port: 8080 });
// event handler
wss.on("connection", function (socket) {
    console.log("User Connected !!!");
    socket.on("message", (e) => {
        if (e.toString() === "ping") {
            socket.send("pong");
        }
        console.log(e.toString());
    });
});