import React, { useState } from 'react'
import CreateRoom from '../components/CreateRoom'

export default function Home() {
  const [createroom,setcreateroom]=useState(false);
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
