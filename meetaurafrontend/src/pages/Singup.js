import React, { useState } from 'react';
import Googleauth from '../components/Googleauth';
import backgroundImage from '../assects/a-captivating-dark-nature-themed-background-image--p88P6EqtSou8QpsbmUVdtQ-lCZJI24pRUqsxiG-aIRO3w.jpeg'; 

import logo123 from '../assects/My first design (1).png';
import {Link, useNavigate}from 'react-router-dom'
export default function Signup() {

  const navigate=useNavigate()
  const [signupCredentials, setSignupCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [hover, setHover] = useState({
    button: false,
    inputName: false,
    inputEmail: false,
    inputPassword: false,
    inputConfirmPassword: false,
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
        localStorage.setItem('user-token',json.accesstoken)
        navigate('/home')
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
    <div style={{ ...styles.signupContainer, backgroundImage: `url(${backgroundImage})` }}>
     <img src={logo123} alt="Logo" style={styles.logo} />
      <div style={styles.leftSide}>
        <div style={styles.textCard}>
          <h1 style={styles.textCardTitle}><br/><br/> Welcome to Meet Aura<br/>  <br/><br/> </h1>
          <p style={styles.textCardDescription}>
            Welcome to Meet Aura, where virtual interactions are elevated to new heights! Our platform revolutionizes video conferencing and collaboration, providing an innovative and seamless experience for users worldwide.
            <br/><br/>   <br/><br/>  <br/><br/>  <br/><br/>  <br/><br/>  <br/><br/>  <br/><br/>  <br/><br/>  <br/><br/>  <br/><br/> 
          </p>
        </div>
      </div>
      <div style={styles.rightSide}>
        <form style={styles.signupForm} onSubmit={handleClick}>
          <h2 style={styles.signupFormTitle}>Sign Up</h2>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.formLabel}>Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={signupCredentials.name}
              onChange={handleOnChange}
              style={{
                ...styles.formControl,
                borderColor: hover.inputName ? '#777777' : '#555555',
              }}
              onMouseEnter={() => setHover({ ...hover, inputName: true })}
              onMouseLeave={() => setHover({ ...hover, inputName: false })}
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
              style={{
                ...styles.formControl,
                borderColor: hover.inputEmail ? '#777777' : '#555555',
              }}
              onMouseEnter={() => setHover({ ...hover, inputEmail: true })}
              onMouseLeave={() => setHover({ ...hover, inputEmail: false })}
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
              style={{
                ...styles.formControl,
                borderColor: hover.inputPassword ? '#777777' : '#555555',
              }}
              onMouseEnter={() => setHover({ ...hover, inputPassword: true })}
              onMouseLeave={() => setHover({ ...hover, inputPassword: false })}
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
              style={{
                ...styles.formControl,
                borderColor: hover.inputConfirmPassword ? '#777777' : '#555555',
              }}
              onMouseEnter={() => setHover({ ...hover, inputConfirmPassword: true })}
              onMouseLeave={() => setHover({ ...hover, inputConfirmPassword: false })}
            />
          </div>
              <div style={styles.Linkdiv}><p style={{color:"white"}}> already have an account? <Link style={styles.Link}  to='/login' ><pre>   login</pre></Link></p> </div>
                  
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              ...styles.button,
              backgroundColor: hover.button ? '#f7f7f7' : '#615efc',
              color: hover.button ? 'black' : '#E0E0E0',
            }}
            onMouseEnter={() => setHover({ ...hover, button: true })}
            onMouseLeave={() => setHover({ ...hover, button: false })}
          >
            Submit
          </button>
          <Googleauth />
        </form>
      </div>
    </div>
  );
}

const styles = {
  signupContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#1E1E1E',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  rightSide: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftSide: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'left',
    margin: '0px',
    border: '0px',
  },
  textCard: {
    background: 'rgba(0, 0, 0, 0.6)',
    padding: '30px',
    borderRadius: '10px',
    color: '#FFFFFF',
    textAlign: 'justify',
    width: '100%',
    maxWidth: '900px',
  },
  textCardTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  textCardDescription: {
    fontSize: '20px',
    lineHeight: '1.6',
  },
  logo: {
    position: 'absolute',
    top: '20px',
    left: '40px',
    height: '80px',
    width: 'auto',
    padding: '10px',
  },
  signupForm: {
    background: '#2D2D2D',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.7)',
    width: '100%',
    maxWidth: '400px',
    border: '2px solid #444444',
 
  },
  signupFormTitle: {
    fontSize: '24px',
    color: '#FFFFFF',
    marginBottom: '20px',
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: '20px',
  },
  formLabel: {
    fontWeight: 'bold',
    color: '#BBBBBB',
    display: 'block',
    marginBottom: '5px',
  },
  formControl: {
    border: '1px solid #555555',
    borderRadius: '5px',
    padding: '10px',
    width: '100%',
    outline: 'none',
    backgroundColor: '#3A3A3A',
    color: '#E0E0E0',
    transition: 'border-color 0.3s',
  },
  formText: {
    fontSize: '12px',
    color: '#AAAAAA',
  },
  formCheck: {
    marginBottom: '20px',
  },
  formCheckLabel: {
    color: '#BBBBBB',
  },
  button: {
    backgroundColor: '#615efc',
    border: 'none',
    color: '#E0E0E0',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '100%',
  },
  Link: {
    textDecoration: 'none',
    color:'#fff ',
    fontweight: '500',
    transition: 'color 0.3s ease', 
    backgroundColor:'#8dabf9',
    borderRadius:'13px',
    marginBottom:'20px',
    padding:'3px',
    display: 'block',
    maxWidth:'30%',
    paddingtop:'3px',
    fontfamily: "Times New Roman",

  },
  Linkdiv:{
    padding:'20px'
  }
};
