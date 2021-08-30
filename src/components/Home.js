import React from 'react';

const Home = ({user, token, messages, userId}) => {
  console.log('messages: ', messages);
  return <>
    <h1 className="welcome">Welcome to Stranger's Things</h1>
        {token ? <div className="welcomeuser">
          You are logged in as {user}
        </div> : ''}
  </>
}


export default Home;