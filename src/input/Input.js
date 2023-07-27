import { useState } from 'react';
import classes from './Input.module.css';

const Input = ({ onSend, users, currentUser }) => {
  const [senderUsername, setUsername] = useState('');
  const [message, setMessage] = useState('');

  function send(e) {
    e.preventDefault();
    if (!senderUsername || !message) {
        alert('Please enter a username and a message');
        return;
    }
    console.log(currentUser.name, 123);
    onSend({
        message,
        currentUser
    });
    setMessage('');
  }

  return (
    <form onSubmit={send} action="" className={classes.form}>
        <input 
            className={classes.input}
            type="text"
            name="receiver" 
            list="receiverName" 
            onChange={(e) => setUsername(e.currentTarget.value)}
            placeholder="Имя получателя"
            style={{ flexGrow: 0 }}
        />
        <datalist id="receiverName">
            {users.map((user) => (
                <option value={user.name}></option>
            ))}
        </datalist>
        <input
            className={classes.input}
            autoComplete="off"
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
            placeholder="Напишите сообщение..."
        />
        <button>Send</button>
    </form>
  );
};

export default Input;
