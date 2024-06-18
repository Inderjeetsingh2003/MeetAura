import React, { useContext } from 'react'
import { Roomcontext } from '../context/RoomContext'


export default function PrivateChatroom() {
    const{privateroominfo}=useContext(Roomcontext)

  return (
    <div className="card-container">
    {privateroominfo && privateroominfo.map(room => (
      <div key={room._id} className="card">
        <img className="card-img-top" src={room.image} alt='' />
        <div className="card-body">
          <h5 className="card-title">{room.name}</h5>
          <p className="card-text">{room.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Access Type: {room.accesstype}</li>
          <li className="list-group-item">Room Type: {room.roomtype}</li>
          <li className="list-group-item">Admin: {room.admin.username}</li>
          {/* Add more details as needed */}
        </ul>
      </div>
    ))}
  </div>
  )
};