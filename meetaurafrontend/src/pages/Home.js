import React, { useState,useEffect } from 'react'
import CreateRoom from '../components/CreateRoom'
import {useNavigate} from 'react-router-dom'

export default function Home() {
  const [createroom,setcreateroom]=useState(false);
  const navigate=useNavigate()
  useEffect(() => {
    if(!localStorage.getItem('user-token'))
      {
          navigate('/login')
      }
  }, [])
  
  const handleclick=()=>
    {
      setcreateroom(!createroom)
    }
  return (
    <>
   {!createroom && <button onClick={handleclick}>createroom</button>}
    {createroom &&<CreateRoom handleclick={handleclick}/>}
    </>
  )
}
