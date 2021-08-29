import React from 'react';
import { useParams } from 'react-router';

import PostSingle from './PostSingle';
import MessageForm from './MessageForm'

const PostView = ({posts, token}) => {
  const {postId} = useParams();
  console.log('postId: ', postId);
  const post = posts.find(post => post._id === postId);
  console.log('post: ', post);
  return <>
    <PostSingle post={post}>
      {/* {post && post.messages && post.messages.map(message => <div key={message._id}>{message.fromUser.username}: {message.content} </div>)} */}
      <MessageForm token={token} post={post}/>
    </PostSingle>
  </>
}

export default PostView;