import classes from './Message.module.css';

const Message = ({ message, username }) => {
    return (
        <li className={classes.li}>
        <span style={{ fontWeight: 'bold' }}>{username}: </span>
        {message}
        </li>
    );
};

export default Message;
