const express = require("express");
const app = express();
const server = require("http").createServer(app);
const { Socket } = require("socket.io");
const io = Socket(server);

const rooms = {};

io.on("Connection", (Socket) => {
  Socket.on("Join room", (roomID) => {
    if (rooms[roomID]) {
      rooms[roomID].push(Socket.id);
    } else {
      rooms[roomID] = [Socket.id];
    }
    const otherUser = rooms[roomID].find((id) => id !== Socket.id);
    if (otherUser) {
      Socket.emit("Other user", otherUser);
      Socket.to(otherUser).emit("User joined", Socket.id);
    }
  });

  Socket.on("Offer", (payload) => {
    io.to(payload.target).emit("Offer", payload);
  });
});

server.listen(8000, () => console.log("Server is running on port 8000"));
