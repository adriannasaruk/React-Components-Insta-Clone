//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from "../../dummy-data.js";

const PostsPage = () => {
  const [data] = useState(dummyData);
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {data.map(items => (
        <Post key={items.username} post = {items}/>
      ))}
      {/* map through data here to return a Post and pass data as props to Post */}
    </div>
  );
};

export default PostsPage;

