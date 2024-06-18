import React, { useState } from 'react';
import Googleauth from '../components/Googleauth';
import backgroundImage from '../assects/a-captivating-dark-nature-themed-background-image--p88P6EqtSou8QpsbmUVdtQ-lCZJI24pRUqsxiG-aIRO3w.jpeg'
 
import logo123 from '../assects/My first design (1).png';
import { Link, useNavigate } from 'react-router-dom';


export default function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [hover, setHover] = useState({ button: false, inputEmail: false, inputPassword: false });

  const navigate=useNavigate()
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
      localStorage.setItem('user-token',json.accesstoken)
      navigate('/home')
    } else {
      alert(json.message);
    }
  };

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ ...styles.pageContainer, backgroundImage: `url(${backgroundImage})` }}>
      <div style={styles.leftSide}>
        <img src={logo123} alt="Logo" style={styles.logo} />
        <div style={styles.textCard}>
          <h2 style={styles.textCardTitle}>   <br/><br/> <br/><br/> Welcome to Meet Aura  </h2>
          <p style={styles.textCardDescription}>
          <br/><br/> <br/> Welcome to Meet Aura, where virtual interactions are elevated to new heights! Our platform revolutionizes video conferencing and collaboration, providing an innovative and seamless experience for users worldwide.
            <br/><br/><br/>   <br/><br/><br/>   <br/><br/><br/>         
          </p>
        </div>
      </div>
      <div style={styles.rightSide}>
        <form style={styles.loginForm} onSubmit={handleClick}>
          <h2 style={styles.formTitle}>Login Form</h2>
          <div style={styles.formGroup}>
            <label htmlFor="exampleInputEmail1" style={styles.formLabel}>
              Email address
            </label>
            <input
              type="email"
              style={{
                ...styles.formControl,
                borderColor: hover.inputEmail ? '#777777' : '#555555',
              }}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
              onChange={handleOnChange}
              onMouseEnter={() => setHover({ ...hover, inputEmail: true })}
              onMouseLeave={() => setHover({ ...hover, inputEmail: false })}
            />
            <div style={styles.formText}>We'll never share your email with anyone else.</div>
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="exampleInputPassword1" style={styles.formLabel}>
              Password
            </label>
            <input
              type="password"
              style={{
                ...styles.formControl,
                borderColor: hover.inputPassword ? '#777777' : '#555555',
              }}
              id="exampleInputPassword1"
              name="password"
              value={credentials.password}
              onChange={handleOnChange}
              onMouseEnter={() => setHover({ ...hover, inputPassword: true })}
              onMouseLeave={() => setHover({ ...hover, inputPassword: false })}
            />
          </div>
          <div  style={styles.Linkdiv}><p style={{color:'white'}}> do not have an account?</p><Link style={styles.Link}to='/'> Sign up</Link></div>
          <button
            type="submit"
            style={{
              ...styles.btn,
              backgroundColor: hover.button ? '#777777' : '#615EFC',
            }}
            onMouseEnter={() => setHover({ ...hover, button: true })}
            onMouseLeave={() => setHover({ ...hover, button: false })}
          >
            Login
          </button>
          <Link  to ='/forgotpassword'>forgotpassword</Link>
          <Googleauth />
        </form>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
    width: '100vw', // Added this line to make it take the whole width
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  leftSide: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
   
    
  },
  logo: {
    position: 'absolute',
    top: '20px',
    left: '40px',
    height: '80px',
    width: 'auto',
    padding: '10px',
  },
  textCard: {
    background: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
    padding: '30px',
    borderRadius: '10px',
    color: '#FFFFFF', // White text color
    textAlign: 'justify',
    width: '100%',
    maxWidth: '900px',
    height: '100vh'
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
  rightSide: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginForm: {
    background: 'rgba(45, 45, 45, 0.8)', // Dark form background with transparency
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.7)', // Darker shadow
    width: '100%',
    maxWidth: '400px',
    border: '2px solid #444444', // Darker border
  },
  formTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#FFFFFF', // White text color
    marginBottom: '20px',
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: '20px',
  },
  formLabel: {
    fontWeight: 'bold',
    color: '#BBBBBB', // Light gray for text
    display: 'block',
    marginBottom: '5px',
  },
  formControl: {
    border: '1px solid #555555', // Darker border
    borderRadius: '5px',
    padding: '10px',
    width: '100%',
    outline: 'none',
    backgroundColor: '#3A3A3A', // Dark input background
    color: '#E0E0E0', // Light text color
    transition: 'border-color 0.3s',
  },
  formText: {
    fontSize: '12px',
    color: '#AAAAAA', // Light gray for helper text
  },
  btn: {
    backgroundColor: '#615EFC', // Button background color retained for contrast
    border: 'none',
    color: '#fff', // Text color
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
    padding:'10px'
  },
  Linkdiv:{
    padding:'20px'
  }
};
