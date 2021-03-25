import React from "react";
import s from "./../Dialogs.module.css";

const WriteMassage = () => {

    let newMassage = React.createRef();

    let newMassageElement = () => {
      let text = newMassage.current.value;
      alert (text);
    }

  return (
  <div className={s.writeMassage}> 
    <div>
      <textarea ref = {newMassage}></textarea>
      <div>
        <button onClick = {newMassageElement}>Отправить</button>
      </div>
    </div>
  </div>
  )

};

export default WriteMassage;
