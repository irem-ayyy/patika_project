const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" }  // Her yerden bağlantıya izin ver
});

io.on("connection", (socket) => {
    console.log("Bir kullanıcı bağlandı:", socket.id);

    // Mesaj geldiğinde herkese gönder
    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    });

    socket.on("disconnect", () => {
        console.log("Bir kullanıcı ayrıldı:", socket.id);
    });
});

server.listen(3001, () => {
    console.log("Server çalışıyor: http://localhost:3001");
});
