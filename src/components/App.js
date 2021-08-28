import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';

import {
  AccountForm,
  AddPost,
  Home,
  Posts,
  PostView
} from './index';

import { callApi } from '../util';

const { REACT_APP_BASE_URL } = process.env;
// const APIURL = REACT_APP_BASE_URL;
// console.log('APIURL: ', APIURL)

const App = () => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState([]);
  console.log('user: ', user);
  console.log('posts: ', posts);
  console.log('messages: ', messages);

  

  const fetchPosts = async () => {
    const respObj = await callApi({
      url: `/posts`,
      token
    });
    const postResp = respObj.data.posts;
    if(postResp) setPosts(postResp);
  }

  useEffect(() => {
    try {
      fetchPosts();  
    } catch (error) {
      console.error(error);
    }
  }, [token]);

  return <>
    <Link to="/">Home</Link> | 
    {
      token ? <button className ='logout' onClick = {() => setToken('')}>LogOut</button> : <Link to ='/account/login'>Login</Link> 
    } |
    <Link to="/posts">Posts</Link> |

    <Link to="/profile">Profile</Link> |
    
    <Route exact path="/">
      <Home user={user} token={token} messages={messages}/>
    </Route>
    
    <Route exact path="/posts">
      {token ? <AddPost token={token} setPosts={setPosts}/> : null}
      <Posts posts={posts} token={token} fetchPosts={fetchPosts} setPosts={setPosts}/>
    </Route>
    
    <Route exact path="/posts/:postId">
      <PostView posts={posts} token={token}/>
    </Route>
    
    <Route exact path="/account/:method">
      <AccountForm setToken={setToken} setUser={setUser} 
      messages={setMessages}/>
    </Route>
  </>
}

export default App;