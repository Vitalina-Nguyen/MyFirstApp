import React from "react";
// import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem.jsx';
import Massage from './Massage/Massage.jsx';

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map ( dialog => <DialogItem name = {dialog.name} id = {dialog.id} />);
  let myMassageElements = props.state.myMassages.map ( massage => <Massage myMassage = {massage.myMassages} />);
  let friendMassageElements = props.state.friendMassages.map ( massage => <Massage friendMassage = {massage.friendMassages} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.massages}>
        {friendMassageElements}
        {myMassageElements}
      </div>
    </div>
  )
};

export default Dialogs;
