import React from "react";
// import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const Massage = (props) => {
  return (
  <div className={s.massage}> 
    {props.massage}
    {/* <div>
      <textarea></textarea>
      <div>
        <button>Отправить</button>
      </div>
    </div> */}
  </div>
  )

};

export default Massage;
