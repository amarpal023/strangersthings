import React from 'react';

const Home = ({user, token, messages, userId}) => {
  console.log('messages: ', messages);
  return <>
    {
      token ? <> 
      <h1>Welcome to Stranger's Things</h1>
        <div>
          You are logged in as {user}
        </div> 
        <div>
          <h3>Messages Received</h3>
          {
            messages.map(message => {
              console.log('message: ', message);
              return <>
              {userId !== message.fromUser._id ? 
               <div>{message.post.title}: {message.fromUser.username} replied: {message.content}</div>
              : ''}
              </>
            })
          }
          <h3>Messages Sent</h3>
          {
            messages.map(message => {
              console.log('message: ', message);
              return <>
              {userId === message.fromUser._id ? 
               <div>{message.post.title}: {message.fromUser.username} said: {message.content}</div>
              : ''}
              </>
            })
          }
        </div>
      </>
    : ''
    }
  </>
}


export default Home;