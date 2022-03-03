const io = require("socket.io")(5001, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
socket.on("send-changes", records => {
  io.emit("receive-changes", records)
})

});
