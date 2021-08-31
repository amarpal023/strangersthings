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
  
  
  return <>
    {
      posts.map(post => <PostSingle key={post._id} post={post} token={token}>
       
        
        {
          post && <Link to={`/posts/${post._id}`} className="view-link">View Post</Link>
        }

        {
          post.isAuthor && <Link to={`/posts/edit/${post._id}`} className="edit-link">Edit</Link>
        }

        {
          post.isAuthor && <Link to={`/posts/delete/${post._id}`} onClick={() => handleDelete(post._id)} className="delete-link">Delete</Link>
        }
      </PostSingle>)
    }
  </>
}


export default Posts;