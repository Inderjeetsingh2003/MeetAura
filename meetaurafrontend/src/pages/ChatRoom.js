import React, { useMemo, useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import styled from 'styled-components';
import { Usercontext } from '../context/Usercontext';
import Alert from'../components/Alert'
// Styled-components for the chat
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Message = styled.div`
  display: flex;
  justify-content: ${props => props.isSender ? 'flex-end' : 'flex-start'};
  padding: 10px;
`;

const MessageBubble = styled.div`
  background-color: ${props => props.isSender ? '#FF69B4' : '#4682B4'};
  color: #fff; /* Text color */
  border-radius: 10px;
  padding: 10px;
  max-width: 60%;
  font-weight: bold;
`;

export default function ChatRoom() {
  const { userdetail, getuserdetails,showalert ,alert} = useContext(Usercontext);
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
               <div style={{color:'orange'}}> {!isSender && <small>{msg.username}</small>}</div>
                <div>{msg.text}</div>
              </MessageBubble>
            </Message>
          );
        })}
      </ChatContainer>
      <input
        onChange={(e) => setMessageToSend(e.target.value)}
        value={messagetosend}
      />
      <button onClick={sendMessage} className='mx-3'>
        Click to send
      </button>
    </div>
  );
}
