import React from 'react';

const users = [
  { id: 1, name: 'Иван Иванов' },
  { id: 2, name: 'Геральд из Ривии' },
  { id: 3, name: 'Майкл Джордан' },
];

function Login({ onLogin }) {
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
