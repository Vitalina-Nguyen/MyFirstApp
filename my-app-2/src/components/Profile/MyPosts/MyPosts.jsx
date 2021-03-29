import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {

//Создаём массив со всеми постави из бизнеса
  let postsElement = props.posts.map ( p => <Post post = {p.post} likesCount = {p.likeCount}/> );

// Создаём ссылку на ведённый текст в поле
  let newPostElement = React.createRef();


  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = ' '
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
