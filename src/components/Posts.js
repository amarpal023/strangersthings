import React from 'react';
import { callApi } from '../util';
import { Link } from 'react-router-dom';

import {
  PostSingle,
} from '.';

const Posts = ({posts, token, fetchPosts}) => {

  const handleDelete = async (postId) => {
    const respObj = await callApi({
      method: 'DELETE',
      url: `/posts/${postId}`,
      token
    });
    console.log('respObj: ', respObj);
    await fetchPosts();
  }
  // if... isAuthor is true... then show delete
  
  return <>
    {
      posts.map(post => <PostSingle key={post._id} post={post} token={token}>
        {/* props.children */}
        <Link to={`/posts/${post._id}`}>View Post</Link>
        {
          post.isAuthor && <button onClick={() => handleDelete(post._id)}>Delete</button>
        }
      </PostSingle>)
    }
  </>
}


export default Posts;