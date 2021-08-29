import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';

import {
  AccountForm,
  AddPost,
  Home,
  Posts,
  PostView,
  Search, 
  EditPost
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
  const [userId, setUserId] = useState('');
  console.log('user: ', user);
  console.log('posts: ', posts);
  console.log('messages: ', messages);
  console.log('userId: ', userId);

  

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
    <header className="site-banner">
      <Link to ='/' className='emblem'><h1>Stranger's Things</h1></Link>
      <div className='nav-bar'>
      <Link to="/" className="nav-link">Home</Link> | 
      <Link to="/posts" className="nav-link">Posts</Link> |
      {
        token ? <button className ='logout' onClick = {() => setToken('')}>Log Out</button> : <Link to ='/account/login' className='nav-link'>Login</Link> 
      } |
      </div>
    </header>
    <main>
      <Route exact path="/">
        <Home user={user} token={token} messages={messages} userId={userId}/>
      </Route>
      
      <Route>
        <Search posts={posts} setPosts={setPosts}/>
      </Route>

      <Route exact path="/posts">
        {token ? <AddPost token={token} setPosts={setPosts}/> : null}
        <Posts posts={posts} token={token} fetchPosts={fetchPosts} setPosts={setPosts}/>
      </Route>
      
      <Route exact path="/posts/:postId">
        <PostView posts={posts} token={token}/>
      </Route>
      
      <Route exact path="/posts/edit/:postId">
        <EditPost posts={posts} token={token} setPosts={setPosts}/>
      </Route>

      <Route exact path="/account/:method">
        <AccountForm setToken={setToken} setUser={setUser} 
        setMessages={setMessages} setUserId={setUserId}/>
      </Route>
    </main>
    <footer />
  </>
}

export default App;