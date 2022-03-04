const io = require("socket.io")(5001, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
socket.on("send-changes", records => {
  io.emit("receive-changes", records)
})

});
