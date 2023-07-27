import { useState } from 'react';
import Message from './message/Message';
import Input from './input/Input';
import Login from './login/Login';
import Chat from './chat/Chat';

function App() {
    const [messages, setMessages] = useState([]);

    function onSend(message) {
        setMessages((prevMessages) => [...prevMessages, message]);
    }

    const [currentUser, setCurrentUser] = useState(null);

    const handleLogin = (user) => {
        setCurrentUser(user);
    };

    return (
    <main>
        <Login onLogin={handleLogin} />
        <ul>
            {messages.map((message) => (
                <Message {...message} key={message.username + message.message} />
            ))}
        </ul>
        <Input onSend={onSend} />
        <Chat currentUser={currentUser} />
    </main>
    );
}

export default App;
