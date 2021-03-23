import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {

  let postsElement = props.posts.map ( p => <Post post = {p.post} likesCount = {p.likeCount}/> );

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert (text);
  }

  return (
      <div className={s.myPosts}>
        <div className = {s.newPost}>
          <textarea ref = {newPostElement}></textarea>
          <div>
            <button onClick = {addPost}>Отправить</button>
          </div>
        </div>
        {postsElement} 
      </div>
  );
};

export default MyPosts;
