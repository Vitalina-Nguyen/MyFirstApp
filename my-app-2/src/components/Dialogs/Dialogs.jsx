import React from "react";
// import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import WriteMessage from './WriteMessage/WriteMessage.jsx';

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map ( dialog => <DialogItem name = {dialog.name} id = {dialog.id} />);
 
  let messageElements = props.state.messages.map ( message => <Message message = {message.message} />);
  // let friendMessageElements = props.state.friendMessages.map ( message => <Message friendMessage = {message.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messageElements}
        <WriteMessage />
      </div>
      
    </div>
  )
};

export default Dialogs;
