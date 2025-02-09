import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { io } from 'socket.io-client'
import { Button, Container, TextField, Typography } from '@mui/material'


function App() {

  const socket = useMemo(() => io("http://localhost:3000"), [])


  useEffect(() => {
    // on used because server emitted connnection function 
  

      // provided by emit function emit"connection" in server
    socket.on('connect',()=>{
      setSocketId(socket.id)
      console.log("connected",socket.id)
    })

    socket.on("receive-message",(d)=>{
      console.log(d)
    })

    return () => {
      socket.disconnect()
    }

    // When the user visits the website and the App component mounts, a Socket.IO connection is established, and the "welcome" event listener is set up.
    // If the user navigates away from the component or closes the tab:
    // React runs the cleanup  function, which calls socket.disconnect().
  }, [socket]) 

  const [message, setMessage] = useState("") 
  
  const [socketID, setSocketId] = useState("");
  const [room, setRoom] = useState("");
  const [roomName, setRoomName] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit("message", { message, room });
    setMessage("")
  }
  // 
  const joinRoomHandler = (e) => {
    e.preventDefault();
    socket.emit("join-room", roomName);
    setRoomName("");
  };

  return (
    <Container>
      <Typography >Welcome to Socket.IO </Typography>

      <Typography variant="h6" component="div" gutterBottom>
        {socketID}
      </Typography>
       
      <h1> Connect people to a room</h1>
      <form onSubmit={joinRoomHandler}>
        <h5>Join Room</h5>
        <TextField
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          id="outlined-basic"
          label="Room Name"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary">
          Join
        </Button>
      </form>

      
      <h1>Send msg to a particular person(room)</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="outlined-basic"
          label="Message"
          variant="outlined"
        />
         <TextField
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          id="outlined-basic"
          label="Room(id of person to be sent) 
          OR rooom name "
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </form>
    </Container>
  )
}

export default App
