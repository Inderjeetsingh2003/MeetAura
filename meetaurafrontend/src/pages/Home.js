import React, { useState, useEffect } from 'react';
import CreateRoom from '../components/CreateRoom';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [createroom, setCreateRoom] = useState(false);
  const [rotate, setRotate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('user-token')) {
      navigate('/login');
    }
  }, [navigate]);

  const handleClick = () => {
    setCreateRoom(!createroom);
    setRotate(!rotate);
  };
  const buttonStyle = {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    cursor: 'pointer',
    transition: 'transform 0.5s ease-in-out, background-color 0.5s ease-in-out',
    transform: rotate ? 'rotate(360deg)' : 'rotate(0deg)',
    backgroundColor: rotate ? '#ff5733' : '#3498db',
    color: '#fff',
    border: 'none',
    outline: 'none',
  };
  return (
    <>
      {!createroom && (
        <button style={buttonStyle} onClick={handleClick}>
          +
        </button>
      )}
      {createroom && <CreateRoom handleClick={handleClick} />}
    </>
  );
}
