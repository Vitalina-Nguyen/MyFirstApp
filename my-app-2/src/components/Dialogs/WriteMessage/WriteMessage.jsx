import React from "react";
import s from "./../Dialogs.module.css";

const WriteMessage = () => {

    let newMessage = React.createRef();

    let newMessageElement = () => {
      let text = newMessage.current.value;
      alert (text);
    }

  return (
  <div className={s.writeMessage}> 
    <div>
      <textarea ref = {newMessage}></textarea>
      <div>
        <button onClick = {newMessageElement}>Отправить</button>
      </div>
    </div>
  </div>
  )

};

export default WriteMessage;
