import React from 'react';
import logo1 from '../assects/icons8-home.svg';
import logo2 from '../assects/icons8-test-account-30.png';
import logo3 from '../assects/icons8-edit-24.png';
import { useNavigate } from 'react-router-dom';
import '../css/SideNavbar.css'; // Import the CSS file for styling

export default function SideNavbar() {
  const navigate = useNavigate();

  const handleUserProfile = () => {
    navigate('/profile');
  };

  return (
    <div className="side-navbar">
      <button onClick={() => navigate('/home')}>
        <img src={logo1} alt="Home" />
      </button>
      <button onClick={handleUserProfile}>
        <img src={logo2} alt="User Profile" />
      </button>
      <button>
        <img src={logo3} alt="Edit" />
      </button>
    </div>
  );
}






// import React from 'react'
// import logo1 from '../assects/icons8-home.svg';
// import logo2 from '../assects/icons8-test-account-30.png';
// import logo3 from '../assects/icons8-edit-24.png';
// import { useNavigate } from 'react-router-dom';
// export default function() {
//     const navigate=useNavigate()
//     const handleuserprofile =()=>
//         {
//             navigate('/profile')
//         }
      
//   return (
//     <div>  <nav className="navbar">
//     <button onClick={() => navigate('/home')}><img src={logo1} /></button>
//     <button onClick={handleuserprofile} ><img src={logo2} /></button>
//     <button ><img src={logo3} /></button>
//   </nav>
//   </div>
//   )
// }
