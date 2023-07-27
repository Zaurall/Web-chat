import { useState } from 'react';
import classes from './Input.module.css';

const Input = ({ onSend }) => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  function send(e) {
    e.preventDefault();
    if (!username || !message) {
      alert('Please enter a username and a message');
      return;
    }

    onSend({
      message,
      username,
    });
    setMessage('');
  }

  return (
    <form onSubmit={send} action="" className={classes.form}>
      <input
        className={classes.input}
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value)}
        placeholder="Name"
        style={{ flexGrow: 0 }}
      />
      <input
        className={classes.input}
        autoComplete="off"
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
        placeholder="Type your message..."
      />
      <button>Send</button>
    </form>
  );
};

export default Input;
