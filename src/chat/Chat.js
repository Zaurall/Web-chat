import React, { useState } from 'react';
import Input from '../input/Input';
import Message from '../message/Message';

function Chat({ currentUser, users }) {
    const [messages, setMessages] = useState([]);
    const [receivers, setReceivers] = useState([]);

    function onSend({message, username}) {
        console.log({message, username});
        setMessages((prevMessages) => [...prevMessages, message]);
        setReceivers((prevReceivers) => [...prevReceivers, receivers]);
    }

    return (
        <div>
        <h2>Добро пожаловать, {currentUser.name}!</h2>
        <div>
            <ul>
                {messages.map((message) => {
                    console.log(message, currentUser);
                    if (currentUser.name === receivers) {
                        (<Message {...message} key={message.receiver + message.message} />)
                    }
                })}
            </ul>
        </div>
            <Input onSend={onSend} users={users} currentUser={currentUser} />
        </div>
    );
}

export default Chat;
