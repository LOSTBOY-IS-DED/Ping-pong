// import

import { WebSocketServer } from "ws";

// create server
const wss = new WebSocketServer({ port: 8080 });
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
