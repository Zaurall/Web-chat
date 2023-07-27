import React from 'react';
import { Link } from 'react-router-dom';

function Login({ onLogin, users, currentUser }) {
    return (
        <div>
            <h2>Выберите пользователя для входа:</h2>
            {users.map((user) => (
                <button key={user.id} onClick={() => onLogin(user)}>
                    {user.name}
                </button>
            ))}
        </div>
    );
}

export default Login;
