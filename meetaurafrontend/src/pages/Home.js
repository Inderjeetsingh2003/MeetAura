import React, { useState, useEffect, useContext } from 'react';
import CreateRoom from '../components/CreateRoom';
import { useNavigate } from 'react-router-dom';
import PulbicRooms from '../components/PulbicRooms';
import { Roomcontext } from '../context/RoomContext';
import { Usercontext } from '../context/Usercontext';
import UserDetailsDialog from '../components/UserDetailsDialog'; // Import the dialog component
import '../pages/Home.css'; // Import the CSS file
import logo1 from '../assects/icons8-home.svg';
import logo2 from '../assects/icons8-test-account-30.png';
import logo3 from '../assects/icons8-edit-24.png';

export default function Home() {
  const [createroom, setCreateRoom] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [userDetails, setUserDetails] = useState({ name: '', email: '', password: '' }); // State for user details
  const [isEditing, setIsEditing] = useState(false); // State for editing mode
  const navigate = useNavigate();

  const { getpublicrooms } = useContext(Roomcontext);
  const { getuserdetails, saveuserdetails } = useContext(Usercontext); // Assume `saveuserdetails` is available in context

  useEffect(() => {
    if (!localStorage.getItem('user-token')) {
      navigate('/login');
    } else {
      getpublicrooms();
    
      // Fetch user details
      const fetchUserDetails = async () => {
        try {
          const user = await getuserdetails();
          setUserDetails(user);
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      };

      fetchUserDetails();
    }
  }, []);

  const handleClick = () => {
    setCreateRoom(!createroom);
    setRotate(!rotate);

    getpublicrooms()
  };

  const handleUserDetails = () => {
    setShowUserDetails(true);
    setIsEditing(false);
  };

  const handleEditDetails = () => {
    setShowUserDetails(true);
    setIsEditing(true);
  };

  const handleSaveDetails = async (newDetails) => {
    try {
      await saveuserdetails(newDetails); // Assume this saves details to the backend
      setUserDetails(newDetails);
    } catch (error) {
      console.error('Error saving user details:', error);
    }
    setShowUserDetails(false);
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <button onClick={() => navigate('/home')}><img src={logo1} /></button>
        <button onClick={handleUserDetails}><img src={logo2} /></button>
        <button onClick={handleEditDetails}><img src={logo3} /></button>
      </nav>

      <PulbicRooms />
      <button className="create-room-button" onClick={handleClick}>
        +
      </button>

      {createroom && <CreateRoom handleClick={handleClick} />}
      {showUserDetails && (
        <UserDetailsDialog
          userDetails={userDetails}
          isEditing={isEditing}
          onSave={handleSaveDetails}
          onClose={() => setShowUserDetails(false)}
        />
      )}
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
