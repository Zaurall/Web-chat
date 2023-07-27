import { useState } from 'react';
import Login from './login/Login';
import Chat from './chat/Chat';

const users = [
    { id: 1, name: 'Иван Иванов' },
    { id: 2, name: 'Геральд из Ривии' },
    { id: 3, name: 'Майкл Джордан' },
];  

function MainChatPage() {
    const [currentUser, setCurrentUser] = useState(null);

    const handleLogin = (user) => {
        setCurrentUser(user);
    };

    return (
    <main>
        <Login onLogin={handleLogin} users={users} />
        <Chat currentUser={currentUser} users={users} />
    </main>
    );
}

export default MainChatPage;
