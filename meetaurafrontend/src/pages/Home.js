import React, { useState, useEffect, useContext } from 'react';
import CreateRoom from '../components/CreateRoom';
import { useNavigate } from 'react-router-dom';
import PulbicRooms from '../components/PulbicRooms';
import { Roomcontext } from '../context/RoomContext';
import { Usercontext } from '../context/Usercontext';
import '../css/Home.css'; // Import the CSS file

import Navbar from '../components/Navbar';

export default function Home() {
  const [createroom, setCreateRoom] = useState(false);
  const [rotate, setRotate] = useState(false);
 
  const navigate = useNavigate();

  const { getpublicrooms } = useContext(Roomcontext);
  const { getuserdetails,userdetail } = useContext(Usercontext); // Assume `saveuserdetails` is available in context

  useEffect(() => {
    if (!localStorage.getItem('user-token')) {
      navigate('/login');
    } else {
      getpublicrooms();
    
      // Fetch user deta
          getuserdetails(); }
  }, []);

  // creating of room
  const handleClick = () => {
    setCreateRoom(!createroom);
    setRotate(!rotate);

    getpublicrooms()
  };


  // user profile

 
 
  

  return (
    
    <div className="home-container">
    
<Navbar />
      <PulbicRooms />
      
      <button className="create-room-button" onClick={handleClick}>
        +
      </button>

     
    
    </div>
  );
}




// import React, { useState, useEffect, useContext } from 'react';
// import CreateRoom from '../components/CreateRoom';
// import { useNavigate } from 'react-router-dom';
// import PulbicRooms from '../components/PulbicRooms';
// import { Roomcontext } from '../context/RoomContext';
// import { Usercontext } from '../context/Usercontext';
// import UserDetailsDialog from '../components/UserDetailsDialog'; // Import the dialog component
// import '../pages/Home.css'; // Import the CSS file

// export default function Home() {
//   const [createroom, setCreateRoom] = useState(false);
//   const [rotate, setRotate] = useState(false);
//   const [showUserDetails, setShowUserDetails] = useState(false);
//   const [userDetails, setUserDetails] = useState({ name: '', email: '', password: '' }); // State for user details
//   const navigate = useNavigate();

//   const { getpublicrooms } = useContext(Roomcontext);
//   const { getuserdetails } = useContext(Usercontext);

//   useEffect(() => {
//     if (!localStorage.getItem('user-token')) {
//       navigate('/login');
//     } else {
//       getpublicrooms();

//       // Fetch user details
//       const fetchUserDetails = async () => {
//         try {
//           const user = await getuserdetails();
//           setUserDetails(user);
//         } catch (error) {
//           console.error('Error fetching user details:', error);
//         }
//       };

//       fetchUserDetails();
//     }
//   }, [navigate, getpublicrooms, getuserdetails]);

//   const handleClick = () => {
//     setCreateRoom(!createroom);
//     setRotate(!rotate);
//   };

//   const handleUserDetails = () => {
//     setShowUserDetails(true);
//   };

//   return (
//     <div className="home-container">
//       <nav className="navbar">
//         <button onClick={() => navigate('/')}>Home</button>
//         <button onClick={handleUserDetails}>User Details</button>
//       </nav>

//       <PulbicRooms />
//       <button className="create-room-button" onClick={handleClick}>
//         +
//       </button>

//       {createroom && <CreateRoom handleClick={handleClick} />}
//       {showUserDetails && (
//         <UserDetailsDialog
//           userDetails={userDetails}
//           onClose={() => setShowUserDetails(false)}
//         />
//       )}
//     </div>
//   );
// }
