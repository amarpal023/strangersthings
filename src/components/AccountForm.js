import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { callApi } from '../util';

const { REACT_APP_BASE_URL } = process.env;

const AccountForm = ({setToken, setUser, setMessages, setUserId}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState('');
  const params = useParams();
  const history = useHistory();
  
  return <>
    <h1>Login/Register</h1>
    <div>This is the {params.method} method</div>
    <form onSubmit={async (event) => {
      event.preventDefault();
      try {
      // we need to send a fetch request, so we can get the token
      // in order to get a token, the server wants... username and password
      const fetchUrl = `${REACT_APP_BASE_URL}/users/${params.method}`
      console.log('fetchUrl: ', fetchUrl);

      const loginResp = await callApi({
        url: `/users/${params.method}`,
        method: 'POST',
        body: {
          user: {
            username,
            password
          }
        }
      });
      console.log('loginResp: ', loginResp);
      
      
      

      if(loginResp.data) {
        // if we got back a token, get the user data
        const userResp = await callApi({url: '/users/me', token: loginResp.data.token});
        setToken(loginResp.data.token);
        setUser(userResp.data.username);
        setMessages(userResp.data.messages);
        setUserId(userResp.data._id);
        console.log('userResp.data: ', userResp.data);
        if (loginResp.data.token) {
          history.push('/');
        }}
      } catch (error){
        console.error(error)
        alert('Invalid Username or Password')
        setUsername('')
        setPassword('')
      }
    }}>
      <input type="text" placeholder="username" value={username} onChange={(event) => setUsername(event.target.value)}></input>
        <br/>
        <br/>
        <input type="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
        <br/>
        
        
        {
            params.method === 'register' ?  <input type="password" placeholder="retype your password" value={passwordMatch} onChange={(event) => setPasswordMatch(event.target.value)}></input>
            : ''
        }
        { 
        
            params.method === 'register' ? <button type="submit" disabled={!password || !username || password !== passwordMatch } >Submit</button> : <button type="submit" disabled={!password || !username }>Submit</button>
        
        }


    </form>
    {params.method === 'login' ? <Link to = '/account/register'>Click here to register</Link> : <Link to = '/account/login'>Click here to login</Link>}
</>
}


export default AccountForm;