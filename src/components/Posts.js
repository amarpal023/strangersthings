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
        
        {
          post && <Link to={`/posts/${post._id}`}>View Post</Link>
        }

        {
          post.isAuthor && <Link to={`/posts/edit/${post._id}`}>Edit</Link>
        }

        {
          post.isAuthor && <Link to={`/posts/delete/${post._id}`} onClick={() => handleDelete(post._id)}>Delete</Link>
        }
      </PostSingle>)
    }
  </>
}


export default Posts;