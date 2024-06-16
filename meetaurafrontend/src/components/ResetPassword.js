import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/ResetPassword.css';

export default function ResetPassword() {
  const navigate = useNavigate();
  const { token } = useParams();
  const [credentials, setCredentials] = useState({ password: '', confirmPassword: '' });
  const [loading, setLoading] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    localStorage.removeItem('user-token');
    if (credentials.password !== credentials.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    setLoading(true);
    setTimeout(async () => {
      const response = await fetch(`http://localhost:4000/user/resetpassword/${token}`, {
        mode: 'cors',
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ password: credentials.password }),
      });
      const json = await response.json();
      setLoading(false);
      if (json.success) {
        alert(json.message);
        navigate('/login');
      } else {
        alert(json.message);
        navigate('/forgotpassword');
      }
    }, 2000); // Simulate delay for 2 seconds
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container"  >
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Enter New Password</label>
        <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
        <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={credentials.confirmPassword} onChange={handleChange} />
      </div>
      
      <button type="button" className="btn btn-primary" onClick={handleClick} disabled={loading}>
        {loading ? (
          <span className="spinner active"></span>
        ) : (
          'Enter New Password'
        )}
      </button>
    </div>
  );
}









// import React, { useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'

// export default function ResetPassword() {
// const navigate=useNavigate()
//     const {token}=useParams()
//     const[creadentials,Setcreadentials]=useState({password:'',confirmpassword:''})
//    const handleClick=async(e)=>
//     {
//         e.preventDefault()
//         localStorage.removeItem('user-token')
//         if(creadentials.password!==creadentials.confirmpassword)
//             {
//                 alert("password do not match")
//                 return 
//             }
//             else{
//                 const response=await fetch(`http://localhost:4000/user/resetpassword/${token}`,
//                     {
//                         mode:'cors',
//                         method:'PUT',
//                         headers:{
//                             "Content-type":'application/json'
//                         },
//                         body:JSON.stringify({password:creadentials.password})
//                     }
//                 )
//                 const json=await response.json()
//                 if(json.success)
//                     {
//                         alert(json.message)
//                         navigate('/login')
//                     }
//                     else{
//                         alert(json.message)
//                         navigate('/forgotpassword')
//                     }
//             }
//     }
    
// const handlechange=(e)=>
//     {
//         Setcreadentials({...creadentials,[e.target.name]:e.target.value})
//     }
//   return (
//     <>

//     <div> <div class="mb-3">
//     <label for="exampleInputPassword1" class="form-label" >enter new password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1" name='password' value={creadentials.password} onChange={handlechange}/>
//   </div>

//   <div class="mb-3">
//     <label for="exampleInputPassword1" class="form-label">confirm new password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1"  name='confirmpassword' value={creadentials.confirmpassword} onChange={handlechange}/>
//   </div>
//   <button type="button" class="btn btn-primary" onClick={handleClick}>enter new password</button>
//   </div>
//     </>
//   )
// }
