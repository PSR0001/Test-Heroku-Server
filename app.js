const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const { instrument } = require("@socket.io/admin-ui");
const favicon = require('serve-favicon')
const path = require('path')
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: ["https://admin.socket.io"],
    credentials: true
  },
});

require('dotenv').config();

const PORT = process.env.PORT || 3000

app.use(favicon(path.join(__dirname, 'views', 'assets/icon/favicon.ico')))

app.set('view engine', 'pug')


app.use(cors())
app.set('views', path.join(__dirname, 'views'))

app.use('/home', require('./routes/homepage'))
// app.use('*', (req, res) => {
//   res.render('webpages/404')
// })

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

let message = {
  "distance": 12,
  "time": 1
}


try {

  io.on("connection", (socket) => {

    console.log(`User with id: ${socket.id} connected!`);

    socket.on("disconnect", () => {
      console.log(`User with id: ${socket.id} disconnected`);
    });

    io.emit("Chart-Data",message)

  });

  instrument(io, { auth: false });
} catch (error) {
  console.log(`Could not start the server, ${error}`);
}