import React, { useState } from 'react';

export default function Signup() {
  const [signupCredentials, setSignupCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleClick = async (e) => {
    e.preventDefault();
    if (signupCredentials.password === signupCredentials.confirmPassword) {
      const response = await fetch('http://localhost:4000/user/signup', {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: signupCredentials.name,
          email: signupCredentials.email,
          password: signupCredentials.password,
        }),
      });

      const json = await response.json();
      if (json.success) {
        console.log('Signup successfully done');
        console.log(json.accesstoken);
      } else {
        alert(json.message);
      }
    } else {
      alert('Password and confirm password do not match');
    }
  };

  const handleOnChange = (e) => {
    setSignupCredentials({ ...signupCredentials, [e.target.name]: e.target.value });
  };

  return (
    <div style={styles.signupContainer}>
      <form style={styles.signupForm}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.formLabel}>Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={signupCredentials.name}
            onChange={handleOnChange}
            style={styles.formControl}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.formLabel}>Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={signupCredentials.email}
            onChange={handleOnChange}
            style={styles.formControl}
          />
          <div style={styles.formText}>We'll never share your email with anyone else.</div>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.formLabel}>Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={signupCredentials.password}
            onChange={handleOnChange}
            style={styles.formControl}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="confirmPassword" style={styles.formLabel}>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={signupCredentials.confirmPassword}
            onChange={handleOnChange}
            style={styles.formControl}
          />
        </div>
        <div style={styles.formCheck}>
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1" style={styles.formCheckLabel}>Check me out</label>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleClick} style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

const styles = {
  signupContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#F1F0E8',
  },
  signupForm: {
    background: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    border: '2px solid #EEE0C9',
  },
  formGroup: {
    marginBottom: '20px',
  },
  formLabel: {
    fontWeight: 'bold',
    color: '#96B6C5',
    display: 'block',
    marginBottom: '5px',
  },
  formControl: {
    border: '1px solid #ADC4CE',
    borderRadius: '5px',
    padding: '10px',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  formControlFocus: {
    borderColor: '#ADC4CE',
  },
  formText: {
    fontSize: '12px',
    color: '#ADC4CE',
  },
  formCheck: {
    marginBottom: '20px',
  },
  formCheckLabel: {
    color: '#96B6C5',
  },
  button: {
    backgroundColor: '#96B6C5',
    border: 'none',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '100%',
  },
  buttonHover: {
    backgroundColor: '#ADC4CE',
  },
};












// import React, { useState } from 'react'

// export default function Singup() {
//  const[singupcredentials,setsingupcredentials]=useState({name:'',email:'',password:'',confirmpassword:''})

//  const handleclick=async(e)=>
//     {
//         e.preventDefault()
//         if(singupcredentials.password===singupcredentials.confirmpassword)
//             {
//                 const response=await fetch('http://localhost:4000/user/signup',{
//                     mode:'cors',
//                     method:'POST',
//                     headers:{
//                         'Content-Type':'application/json'
//                     },
//                     body:JSON.stringify({'name':singupcredentials.name,'email':singupcredentials.email,'password':singupcredentials.password})
//                 })

//                 const json=await response.json()
//                 if(json.success)
//                     {
//                         console.log("singup successfully done")
//                         console.log(json.accesstoken)

//                     }
//                     else{
//                         alert(json.message)
//                     }
//             }
//             else{
//                 alert('password and confirmm password do not match')
//             }
//     }



// const handleonchange=(e)=>
//     {
//         setsingupcredentials({...singupcredentials,[e.target.name]:e.target.value})
//     }

//   return (
//    <>
//    <form>
//   <div className="mb-3">
//     <label for="exampleInputEmail1" className="form-label">Name</label>
//     <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='name'value={singupcredentials.name} onChange={handleonchange}/>
//     <div id="emailHelp" className="form-text"></div>
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email'value={singupcredentials.email} onChange={handleonchange}/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputPassword1" className="form-label">Password</label>
//     <input type="password" className="form-control" id="exampleInputPassword1" name='password'value={singupcredentials.password} onChange={handleonchange}/>
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputPassword1" className="form-label">confirm password</label>
//     <input type="password" className="form-control" id="exampleInputPassword1" name='confirmpassword'value={singupcredentials.confirmpassword} onChange={handleonchange}/>
//   </div>
//   <div className="mb-3 form-check">
//     <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//     <label className="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="button" className="btn btn-primary" onClick={handleclick}>Submit</button>
// </form>
//    </>
//   )
// }
