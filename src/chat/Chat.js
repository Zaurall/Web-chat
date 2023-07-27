import React, { useState } from 'react';
import Input from '../input/Input';
import Message from '../message/Message';

function Chat({ currentUser, users }) {
    const [messages, setMessages] = useState([]);

    function onSend({message, receiverUsername, senderUsername}) {
        setMessages((prevMessages) => [...prevMessages, {message: message, receiver: receiverUsername, sender: senderUsername}]);
    }

    


    return (
        <div>
        <h2>Добро пожаловать, {currentUser.name}!</h2>
        <div>
            <ul>
                {messages.map((message, i) => {
                    if (currentUser.name === message.receiver) {
                        console.log(message.message, message.receiver, message.sender);
                        return (<Message key={i} message={message.message} sender={message.sender === currentUser.name ? 'Me' : message.sender} />)
                    }
                })}
            </ul>
        </div>
            <Input onSend={onSend} users={users} currentUser={currentUser} />
        </div>
    );
}

export default Chat;
