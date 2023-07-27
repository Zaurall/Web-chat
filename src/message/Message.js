import classes from './Message.module.css';

const Message = ({ message, sender, receiver }) => {
    return (
        <li className={classes.li}>
        <span style={{ fontWeight: 'bold' }}>{sender}: </span>
        {message}
        </li>
    );
};

export default Message;
