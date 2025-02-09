import express from 'express'
import { Server } from 'socket.io'
import cors from 'cors'
import { createServer } from 'http' 
// https://www.youtube.com/watch?v=_h7Pc1woq-I&list=WL&index=43

const PORT = 3000

//express instance server
const app = express()


const server = createServer(app)

//instance of io server
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true,
    }
})

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
}))

app.get('/', (req, res) => {
    res.send('Hello World')
})
//  socket is availabe as argument by default 
io.on("connection", (socket) => {
    console.log("User Connected=> ", socket.id)

    //io emit function with callback (broadcasts to all sockets)
    socket.emit("welcome", `Welcome to the server ${socket.id}`)


    //emits this even to all sockets except the current one 
    // socket.broadcast.emit("welcome",`Welcome to the server ${socket.id}`)


    //dm a person 
    socket.on("message", ({room,message}) => {
        console.log({room,message})
        socket.to(room).emit('receive-message', message)
    })

    socket.on('join-room',(room)=>{
        socket.join(room); // to make people join a particular rooom 
        console.log(`User joined room ${room}`);
    })

    socket.on('disconnect', () => {
        console.log("user Disconnected")
    })
})


server.listen(PORT, () => {
    console.log("Server is up and running ")
})