import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router';

const apiUrl = `https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT`;

const Login = ({setToken, setUser}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState('');
    const params = useParams();
    const history = useHistory();

    console.log(params.method);

    return <>
    <h1>Login/Register</h1>
    <div>This is the {params.method} method</div>
    <form onSubmit={async (event) => {
        event.preventDefault();

        const fetchApiUrl = `${apiUrl}/users/${params.method}`
        console.log('fetchApiUrl: ', fetchApiUrl);

        const resp = await fetch(`https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/users/${params.method}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username,
                    password
                }
            })
        });
        const respObj = await resp.json();
        
        console.log(respObj);

        if(respObj.data) {
            setToken(respObj.data.token);
            setUser(respObj.data.user);
            if (respObj.data.token) {
                history.push('/');
            }
        }
    }}>
        <input type="text" placeholder="username" value={username} onChange={(event) => setUsername(event.target.value)}></input>
        <br/>
        <br/>
        <input type="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
        <br/>
        
        
        {
            params.method === 'register' ?  <input type="password" placeholder="password" value={password} onChange={(event) => setPasswordMatch(event.target.value)}></input>
            : ''
        }
        { 
        
            !password.value === passwordMatch.value ? <button disabled='true' >Submit</button> : <button type="submit">Submit</button>
        
        }


    </form>
</>
}


export default Login;