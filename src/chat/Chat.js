import React, { useState } from 'react';
import Input from '../input/Input';
import Message from '../message/Message';

function Chat({ currentUser, users }) {
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
        <Input onSend={onSend} users={users} />
        </div>
    );
}

export default Chat;
