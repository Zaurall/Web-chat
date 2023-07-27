import React, { useState } from 'react';
import Input from '../input/Input';
import Message from '../message/Message';

function Chat({ currentUser }) {
  const [message, setMessage] = useState('');

  const [messages, setMessages] = useState([]);

  function onSend(message) {
      setMessages((prevMessages) => [...prevMessages, message]);
  }

  return (
    <div>
      <h2>Добро пожаловать, {currentUser.name}!</h2>
      <div>
        <ul>
            {messages.map((message) => (
                <Message {...message} key={message.username + message.message} />
            ))}
        </ul>
      </div>
      <Input onSend={onSend} />
    </div>
  );
}

export default Chat;
