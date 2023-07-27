import { useState } from 'react';
import Login from './login/Login';
import Chat from './chat/Chat';

const users = [
    { id: 1, name: 'Иван Иванов' },
    { id: 2, name: 'Геральд из Ривии' },
    { id: 3, name: 'Майкл Джордан' },
]; 

function App() {
    const [currentUser, setCurrentUser] = useState(null);

    const handleLogin = (user) => {
        setCurrentUser(user);
    };

    let isLoggedIn = currentUser == null;
    let content;

    if (!isLoggedIn) {
        content = <div> <Login onLogin={handleLogin} users={users} currentUser={currentUser} /> <Chat currentUser={currentUser} users={users} /> </div>;
    } else {
        content = <Login onLogin={handleLogin} users={users} currentUser={currentUser} />;
    }

    return (
        <main>
            {content}
        </main>
    );
}

export default App;
