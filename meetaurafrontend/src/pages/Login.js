import React, { useState } from 'react';
import Googleauth from '../components/Googleauth';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/user/login', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    });

    const json = await response.json();
    if (json.success) {
      console.log('Login successful');
      console.log(json.accesstoken);
    } else {
      alert(json.message);
    }
  };

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div style={styles.loginContainer}>
      <form style={styles.loginForm}>
        <div style={styles.formGroup}>
          <label htmlFor="exampleInputEmail1" style={styles.formLabel}>
            Email address
          </label>
          <input
            type="email"
            style={styles.formControl}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={credentials.email}
            onChange={handleOnChange}
          />
          <div style={styles.formText}>We'll never share your email with anyone else.</div>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="exampleInputPassword1" style={styles.formLabel}>
            Password
          </label>
          <input
            type="password"
            style={styles.formControl}
            id="exampleInputPassword1"
            name="password"
            value={credentials.password}
            onChange={handleOnChange}
          />
        </div>
        <button type="button" style={styles.btn} onClick={handleClick}>
          Login
        </button>
        <Googleauth />
      </form>
    </div>
  );
}

const styles = {
  loginContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#EEEEEE',
  },
  loginForm: {
    background: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    border: '2px solid #D1D8C5',
  },
  formGroup: {
    marginBottom: '20px',
  },
  formLabel: {
    fontWeight: 'bold',
    color: '#615EFC',
    display: 'block',
    marginBottom: '5px',
  },
  formControl: {
    border: '1px solid #D1D8C5',
    borderRadius: '5px',
    padding: '10px',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  formControlFocus: {
    borderColor: '#7E8EF1',
  },
  formText: {
    fontSize: '12px',
    color: '#7E8EF1',
  },
  btn: {
    backgroundColor: '#615EFC',
    border: 'none',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '100%',
  },
  btnHover: {
    backgroundColor: '#7E8EF1',
  },
};









// import React, { useState } from 'react'
// import Googleauth from '../components/Googleauth'

// export default function Login() {

//     const [credentials,setcredentials]=useState({email:'',password:''})
//     const handleclick=async(e)=>
//         {
//             e.preventDefault();
//             const response=await fetch('http://localhost:4000/user/login',
//                 {
//                     mode:"cors",
//                     method:'POST',
//                     headers:{
//                         "Content-TYPE":"application/json"
//                     },
//                     body:JSON.stringify({"email":credentials.email,"password":credentials.password})
//                 }
//             )

//             const json=await response.json()
//             if(json.success)
//                 {
//                     console.log('login successfull')
//                     console.log(json.accesstoken);
//                 }
//                 else{
//                     alert(json.message)
//                 }
//         }


// const handleonchange=(e)=>
//     {
//         setcredentials({...credentials,[e.target.name]:e.target.value})
//     }

//   return (
//     <div><form>
//     <div className="mb-3">
//       <label for="exampleInputEmail1" className="form-label"  >Email address</label>
//       <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  name="email" value={credentials.email} onChange={handleonchange}/>
//       <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//     </div>
//     <div className="mb-3">
//       <label for="exampleInputPassword1" className="form-label">Password</label>
//       <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={handleonchange}/>
//     </div>
    
//     <button type="button" className="btn btn-primary" onClick={handleclick}>login</button>


//     <Googleauth/>

//   </form></div>
//   )
// }
