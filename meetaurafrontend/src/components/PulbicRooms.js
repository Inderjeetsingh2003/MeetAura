import React, { useContext,useEffect } from 'react'
import { Roomcontext} from '../context/RoomContext'

export default function PulbicRooms() {
    const{PublicRooms}=useContext(Roomcontext)

 
    
  return (
   
    <>
    {PublicRooms&&PublicRooms.map(room => (
        
        <div key={room._id} className="card" style={{ width: "18rem" }}>
            <img src={room.image} className="card-img-top" alt={room.title} />
            <div className="card-body">
                <h5 className="card-title">{room.title}</h5>
                <p className="card-text">{room.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Access Type: {room.accesstype}</li>
                <li className="list-group-item">Room Type: {room.roomtype}</li>
                <li className="list-group-item">Room Type: {room.admin.username}</li>
                {/* Add more details as needed */}
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Join Room</a>
                {/* Add more actions if needed */}
            </div>
        </div>
        
    ))
}
</>
  )
}
