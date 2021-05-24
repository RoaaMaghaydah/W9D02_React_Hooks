import React, { useState } from 'react';

// jsx
const App = () => {
  const [posts, setPosts] = useState([{ userId: "1", id: "123", title: "post1", body: "add the first post in blog app" },
  { userId: 2, id: 321, title: "post2", body: "add the seconde post in blog app" }]);
  const [usresId, setUsresId] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <>
      <h1>Blog App</h1>
      {posts && posts.map((post, i) =>
        <div key={i}>
          <p>{post.id}</p>
          <p>{post.title}</p>
          <p>{post.body} </p>
          <input type="text" placeholder="id" onChange={(e) => {
            setId(e.target.value);
          }}/> 

          <input type="text" placeholder="UserID" onChange={(e) => {
            setUsresId(e.target.value);
          }}/>

          <input type="text" placeholder="title" onChange={(e) => {
            setTitle(e.target.value);
          }}/>

          <input type="text" placeholder="Body" onChange={(e) => {
            setBody(e.target.value);
          }}/>

          <button>click</button>
        </div>)}

    </>
  )
};


export default App