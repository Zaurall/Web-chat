import { useState } from 'react';
import Login from './login/Login';
import Chat from './chat/Chat';

function App() {
    const [currentUser, setCurrentUser] = useState(null);

    const handleLogin = (user) => {
        setCurrentUser(user);
    };

    return (
    <main>
        <Login onLogin={handleLogin} />
        <Chat currentUser={currentUser} />
    </main>
    );
}

export default App;
