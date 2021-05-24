import React, { useState, useEffect } from 'react';
import axios from 'axios';

// jsx
const App = () => {
  const [posts, setPosts] = useState([{ userId: "1", id: "123", title: "post1", body: "add the first post in blog app" },
  { userId: 2, id: 321, title: "post2", body: "add the seconde post in blog app" }]);
  const [usresId, setUsresId] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const getData = () => {
    console.log('getData');
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        console.log('DATA: ', response.data);
        setPosts(response.data);
      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
  };

  useEffect(() => {
    console.log('I am ready now');
    getData();
  }, []);

  const addPost = () => {
    setPosts([...posts, { userId: usresId, id: id, title: title, body: body }])
    console.log(posts);
  }

  return (
    <>
      <h1>Blog App</h1>
      {posts && posts.map((post, i) =>
        <div key={i}>
          <p>Title:{post.title}</p>
          <p>Body: {post.body} </p>
          <p>-------------------------------------</p>
        </div>)}
      <p>id :{id}</p>
      <input type="text" placeholder="id" onChange={(e) => {
        setId(e.target.value);
      }} />
      <p> user id :{usresId}</p>
      <input type="text" placeholder="UserID" onChange={(e) => {
        setUsresId(e.target.value);
      }} />
      <p> title: {title}</p>
      <input type="text" placeholder="title" onChange={(e) => {
        setTitle(e.target.value);
      }} />
      <p>body :{body}</p>
      <input type="text" placeholder="Body" onChange={(e) => {
        setBody(e.target.value);
      }} />

      <button onClick={addPost}>click</button>


    </>
  )
};


export default App