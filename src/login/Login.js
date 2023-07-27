import React from 'react';

function Login({ onLogin, users, currentUser }) {
    return (
        <div>
            <h2>Выберите пользователя для входа:</h2>
            {/* <input 
                type="text"
                name="receiver" 
                list="receiverName" 
                onChange={(e) => onLogin(e.currentTarget.value+1)}
                placeholder="Логин"
            />
            <datalist id="receiverName">
                {users.map((user) => (
                    <option value={user.name}>{user.name}</option>
                ))}
            </datalist> */}

            {/* <select value={currentUser ? currentUser : ''} onChange={(e) => onLogin(parseInt(e.target.value))}>
                <option value="">Выберите пользователя</option>
                {users.map((user) => (
                <option key={user.id} value={user.id}>
                    {user.name}
                </option>
                ))}
            </select> */}
            {users.map((user) => (
                <button key={user.id} onClick={() => onLogin(user)}>
                {user.name}
                </button>
            ))}
            {/* <button key={currentUser.id} onClick={() => onLogin(currentUser)} /> */}
        </div>
    );
}

export default Login;
