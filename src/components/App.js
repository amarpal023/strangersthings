import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import {
    Login,
    Posts,
    NewPost

} from './index.js';

const App = () => {
    const [token, setToken] = useState ('');
    const [user, setUser] = useState ('');
    return <>
        <h1>Stranger's Things</h1>
        <Link to = '/posts'>Post</Link>
        <Link to = '/account/login'>Login</Link>
        <Link to = '/newpost'>NewPost</Link>

        <div>
            <Route exact path = '/'>
                <Posts /> 
            </Route>
            
            <Route path = '/posts'>
                <Posts token = {token}/>
            </Route>
            
            <Route path = '/account/:method'>
                <Login setToken = {setToken} setUser = {setUser}/>
            </Route>

            <Route path = '/newpost'>
                <NewPost token = {token} />
            </Route>

        </div>
    </>
}


export default App;