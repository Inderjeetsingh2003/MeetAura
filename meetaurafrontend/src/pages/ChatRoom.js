import React, { useMemo, useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import styled from 'styled-components';
import { Usercontext } from '../context/Usercontext';
import '../css/ChatRoom.css';
import Alert from '../components/Alert';
import Sendlogo from '../assects/send (2).png';

const ChatContainer = styled.div`
display: flex;
flex-direction: column;
 * Increased padding */
/* Adjust for fixed footer */
overflow-y: auto;
flex: 1;
background-color: rgba(19, 18, 18, 0.7);
border-radius: 10px; /* Optional: to give a rounded border effect */
margin: 200px;
margin-top: 60px; /* Adjust for fixed header */
margin-bottom: 60px; 
`;

const Message = styled.div`
  display: flex;
  justify-content: ${props => props.isSender ? 'flex-end' : 'flex-start'};
  padding: 10px;
`;

const MessageBubble = styled.div`
  background-color: ${props => props.isSender ? '#FF69B4' : '#4682B4'};
  color: #fff;
  border-radius: 10px;
  padding: 10px;
  max-width: 60%;
  font-weight: bold;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
 
`;

const Input = styled.input`
  width: 70%;
  padding: 10px;
  border-radius: 20px;
  margin-right: 10px;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

export default function ChatRoom() {
  const { userdetail, getuserdetails, showalert, alert } = useContext(Usercontext);
  const [messages, setMessages] = useState([]);
  const [messagetosend, setMessageToSend] = useState('');
  const { id } = useParams();
  const socket = useMemo(() => io('http://localhost:4000'), []);
  const navigate = useNavigate();

  useEffect(() => {
    socket.on('connect', () => {
      console.log("connected", socket.id);
      socket.emit('setusername', { username: userdetail.username, roomid: id });
    });

    socket.on('userconnected', (data) => {
      console.log(data);
      // showalert(data,'success')
    });

    socket.on('message', ({ message, username }) => {
      setMessages(prevMessages => [...prevMessages, { text: message, username }]);
    });

    return () => {
      socket.off('connect');
      socket.off('userconnected');
      socket.off('message');
    };
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('user-token')) {
      navigate('/');
    }
    getuserdetails();
  }, []);

  const sendMessage = () => {
    socket.emit('sendmessage', { roomid: id, message: messagetosend, username: userdetail.username });
    setMessageToSend('');
  };

  return (
    <div>
      <h1>ChatRoom</h1>

      <ChatContainer>
        {messages.map((msg, index) => {
          const isSender = msg.username === userdetail.username;
          return (
            <Message key={index} isSender={isSender}>
              <MessageBubble isSender={isSender}>
                <div style={{ color: 'orange' }}>{!isSender && <small>{msg.username}</small>}</div>
                <div>{msg.text}</div>
              </MessageBubble>
            </Message>
          );
        })}
      </ChatContainer>

      <Footer>
        <Input
          onChange={(e) => setMessageToSend(e.target.value)}
          value={messagetosend}
        />
        <Button onClick={sendMessage} className='mx-3'>
            <img src={Sendlogo} alt="Send" />
        </Button>
      </Footer>
    </div>
  );
}












// import React, { useMemo, useEffect, useState, useContext } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { io } from 'socket.io-client';
// import styled from 'styled-components';
// import { Usercontext } from '../context/Usercontext';
// import './ChatRoom.css';
// import Alert from'../components/Alert'
// // Styled-components for the chat
// const ChatContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
// `;

// const Message = styled.div`
//   display: flex;
//   justify-content: ${props => props.isSender ? 'flex-end' : 'flex-start'};
//   padding: 10px;
// `;

// const MessageBubble = styled.div`
//   background-color: ${props => props.isSender ? '#FF69B4' : '#4682B4'};
//   color: #fff; /* Text color */
//   border-radius: 10px;
//   padding: 10px;
//   max-width: 60%;
//   font-weight: bold;
// `;

// export default function ChatRoom() {
//   const { userdetail, getuserdetails,showalert ,alert} = useContext(Usercontext);
//   const [messages, setMessages] = useState([]);
//   const [messagetosend, setMessageToSend] = useState('');
//   const { id } = useParams();
//   const socket = useMemo(() => io('http://localhost:4000'), []);
//   const navigate = useNavigate();

//   useEffect(() => {
//     socket.on('connect', () => {
//       console.log("connected", socket.id);
//       socket.emit('setusername', { username: userdetail.username, roomid: id });
//     });

//     socket.on('userconnected', (data) => {
//       console.log(data);
//      // showalert(data,'success')

//     });

//     socket.on('message', ({ message, username }) => {
//       setMessages(prevMessages => [...prevMessages, { text: message, username }]);
//     });

//     return () => {
//       socket.off('connect');
//       socket.off('userconnected');
//       socket.off('message');
//     };
//   }, []);

//   useEffect(() => {
//     if (!localStorage.getItem('user-token')) {
//       navigate('/');
//     }
//     getuserdetails();
//   }, []);

//   const sendMessage = () => {
//     socket.emit('sendmessage', { roomid: id, message: messagetosend, username: userdetail.username });
//     setMessageToSend('');
//   };

//   return (
    
//       <div>
//         <h1>ChatRoom</h1>
  
//         <div className="ChatContainer">
//           {messages.map((msg, index) => {
//             const isSender = msg.username === userdetail.username;
//             return (
//               <div key={index} className="Message" style={{ justifyContent: isSender ? 'flex-end' : 'flex-start' }}>
//                 <div className="MessageBubble" style={{ backgroundColor: isSender ? '#4CAF50' : '#e0e0e0', color: isSender ? '#fff' : '#000' }}>
//                   <div style={{ color: 'orange' }}>{!isSender && <small>{msg.username}</small>}</div>
//                   <div>{msg.text}</div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
  
//         <footer>
//           <input
//             onChange={(e) => setMessageToSend(e.target.value)}
//             value={messagetosend}
//           />
//           <button onClick={sendMessage} className='mx-3'>
//             Click to send
//           </button>
//         </footer>
//       </div>
    
//   );
// }
