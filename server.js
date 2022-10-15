const express = require("express");
const app = express();
const server = require("http").createServer(app);
const { Socket } = require("socket.io");
const io = Socket(server);

server.listen(8000, () => console.log("Server is running on port 8000"));