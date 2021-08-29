import React from "react";

const Profile = ({token, messages, user, userId}) => {
    return <div>
        <h1>My Profile</h1>
        {
            token ? <> 
      
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
    </div>
}

export default Profile;