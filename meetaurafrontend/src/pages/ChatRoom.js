import React, { useMemo,useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {io} from 'socket.io-client'


export default function ChatRoom() {

  const[message,setmessage]=useState([])
  const[messagetosend,setmessagetosend]=useState()
const {id}=useParams()
    const socket=useMemo(() => io('http://localhost:4000'), [])
    useEffect(() => {
      socket.on('connect',()=>
      {
        console.log("connected",socket.id)
        socket.emit('setusername',{username:'rahul',roomid:id})
        
      })

      socket.on('userconnected',(data)=>
      {
        console.log(data)
      })
  
      
      socket.on('message',(message)=>
      {
        setmessage((prevMessages) => [...prevMessages, message]);
      })



      return () => {
           socket.off('connect');
            socket.off('userconnected');
            socket.off('message');
      }
    }, [])
    
    const sendmessage=()=>
      {
        socket.emit('sendmessage', {roomid:id,message:messagetosend})
        setmessagetosend('')
      }
  return (
    <div>
    <h1>ChatRoom</h1>
    <div>
        {message.map((msg, index) => (
            <p key={index}>{msg}</p>
        ))}
    </div>
        <input onChange={(e)=>setmessagetosend(e.target.value) } value={messagetosend}/>
        <button onClick={sendmessage} className='mx-3'> click to send</button>
    </div>
  )
}
