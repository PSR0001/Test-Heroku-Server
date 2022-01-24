const express = require('express')
const app = express()
const http = require('http');
const { instrument } = require("@socket.io/admin-ui");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: ["https://admin.socket.io"],
    credentials: true
  },
});

const port = process.env.PORT || 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// testing 
let message = {
    "distance": 12,
    "time": 1
  }
  
  
  
  // Socket listening 
  try {
  
    io.on("connection", (socket) => {
  
      console.log(`User with id: ${socket.id} connected!`);
  
      socket.on("disconnect", () => {
        console.log(`User with id: ${socket.id} disconnected`);
      });
      // console.log(socket);
      // socket.on("")
  
  
      io.emit("Chart-Data",message)
  
    });
  
    //admin-ui
    instrument(io, { auth: false });
  } catch (error) {
    console.log(`Could not start the server, ${error}`);
  }
  