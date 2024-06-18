import React, { useContext } from 'react'
import { Roomcontext } from '../context/RoomContext'
// import '../css/PublicRooms.css'


export default function PrivateChatroom() {
    const{privateroominfo}=useContext(Roomcontext)

  return (
    <div className="card-container">
    {privateroominfo && privateroominfo.map(room => (
       <div key={room._id} className="card"  >
         <div className="card-body">
           <h5 className="card-title">{room.title}</h5>
           <p className="card-text">{room.description}</p>
        </div>
         <ul className="list-group list-group-flush">
           <li className="list-group-item">
               <span className="access-type" style={{backgroundColor:'rgba(188, 60, 60, 0.352)'}}> {room.accesstype}</span>
               <span className="room-type">  {room.roomtype}</span>
           </li>
           {room.admin.username && <li className="list-group-item">Admin: {room.admin.username}</li>}
       </ul>
   </div>
    ))}
  </div>
  )
};


// className="card-container"