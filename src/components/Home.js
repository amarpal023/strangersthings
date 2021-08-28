import React from 'react';

const Home = ({user, token, messages, userId}) => {
  console.log('messages: ', messages);
  return <>
    <h1>Welcome to Stranger's Things</h1>
    {
      token ? <> 
        <div>
          You are logged in as {user}
        </div> 
        <div>
          <h3>Messages Recieved</h3>
          {
            messages.map(message => {
              console.log('message: ', message);
              return <>
              {userId !== message.fromUser._id ? 
               <div className="commentbox">{message.fromUser.username} {message.content}</div>
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
               <div>{message.fromUser.username} {message.content}</div>
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