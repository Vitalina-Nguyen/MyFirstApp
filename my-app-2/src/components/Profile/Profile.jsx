import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.jsx";


const Profile = (props) => {

  return (
    <div className={s.content}>
      <div className={s.background}>
        <img src="https://html5css.ru/css/img_lights.jpg"></img>
      </div>
      <div className={s.item}>photo + info</div>
      <MyPosts posts = {props.state.posts} />
    </div>
  );
}

export default Profile;
