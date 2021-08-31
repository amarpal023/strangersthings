import React from "react";

const Profile = ({token, messages, userId}) => {
    return <div>
        <h1 className = "messageview">My Profile</h1>
        {
            token ? <> 
      
        <div>
          <h3 className = "messagereceived">Messages Received</h3>
          {
            messages.map((message,index) => {
              console.log('message: ', message);
              return <div key= {index}>
              {userId !== message.fromUser._id ? 
               <div className ="messagereceivedsent">{message.post.title}: {message.fromUser.username} replied: {message.content}</div>
              : ''}
              </div>
            })
          }
          <h3 className = "messagesent">Messages Sent</h3>
          {
            messages.map((message, index) => {
              console.log('message: ', message);
              return <div key= {index}>
              {userId === message.fromUser._id ? 
               <div className ="messagereceivedsent">{message.post.title}: {message.fromUser.username} said: {message.content}</div>
              : ''}
              </div>
            })
          }
        </div>
      </>
    : ''
    }
    </div>
}

export default Profile;