import React, { useContext } from 'react';
import { Roomcontext } from '../context/RoomContext';
import '../css/PublicRooms.css'; // Import your CSS file
import logo123 from '../assects/Memorable design.jpeg';
import { useNavigate } from 'react-router-dom';

const PublicRooms = () => {
    const { PublicRooms } = useContext(Roomcontext);
    const navigate=useNavigate()
const handleclick=(roomid)=>
    {
            navigate(`/room/${roomid}`)
    }
    return (
        <div className="card-container" >
            {PublicRooms && PublicRooms.map(room => (
                <div key={room._id} className="card" onClick={()=>handleclick(room._id)} >
                    <img src={logo123} className="card-img-top" alt={room.title} />
                    <div className="card-body">
                        <h5 className="card-title">{room.title}</h5>
                        <p className="card-text">{room.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Access Type: {room.accesstype}</li>
                        <li className="list-group-item">Room Type: {room.roomtype}</li>
                        {room.admin.username&& <li className="list-group-item">Admin: {room.admin.username}</li>}
                        {/* Add more details as needed */}
                    </ul>
                   
                </div>
            ))}
        </div>
    );
};

export default PublicRooms;


// import React, { useContext } from 'react';
// import { Roomcontext } from '../context/RoomContext';
// import './PublicRooms.css'; // Import your CSS file
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// const PublicRooms = () => {
//     const { PublicRooms } = useContext(Roomcontext);

//     return (
//         <div className="card-container">
//             {PublicRooms && PublicRooms.map(room => (
//                 <div key={room._id} className="card">
//                     <img src={room.image} className="card-img-top" alt={room.title} />
//                     <div className="card-body">
//                         <h5 className="card-title">{room.title}</h5>
//                         <p className="card-text">{room.description}</p>
//                     </div>
//                     <ul className="list-group list-group-flush">
//                         <li className="list-group-item">Access Type: {room.accesstype}</li>
//                         <li className="list-group-item">Room Type: {room.roomtype}</li>
//                         <li className="list-group-item">Admin: {room.admin.username}</li>
//                         {/* Add more details as needed */}
//                     </ul>
//                     <div className="card-body">
//                         <a href="#" className="card-link">Join Room</a>
//                         {/* Add more actions if needed */}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default PublicRooms;

 