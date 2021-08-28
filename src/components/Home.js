import React from 'react';

const Home = ({user, token, messages}) => {
  console.log('messages: ', messages);
  return <>
    <h1>Welcome to Stranger's Things</h1>
    {
      token ? <> 
        <div>
          You are logged in as {user}
        </div> 
      </>
    : ''
    }
  </>
}


export default Home;