import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {

  let postsElement = props.posts.map ( p => <Post post = {p.post} likesCount = {p.likeCount}/> );

  return (
      <div>
        <div className = 'NewPost'>
          <textarea></textarea>
          <button>Отправить</button>
        </div>
        {postsElement} 
      </div>
  );
};

export default MyPosts;
