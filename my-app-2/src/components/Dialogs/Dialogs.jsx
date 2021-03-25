import React from "react";
// import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem.jsx';
import Massage from './Massage/Massage.jsx';
import WriteMassage from './WriteMassage/WriteMassage.jsx';

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map ( dialog => <DialogItem name = {dialog.name} id = {dialog.id} />);
 
  let massageElements = props.state.massages.map ( massage => <Massage massage = {massage.massage} />);
  // let friendMassageElements = props.state.friendMassages.map ( massage => <Massage friendMassage = {massage.massage} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.massages}>
        {massageElements}
        <WriteMassage />
      </div>
      
    </div>
  )
};

export default Dialogs;
