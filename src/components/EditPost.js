import React, { useState } from 'react';
import { callApi } from '../util';
import { useParams, useHistory } from 'react-router';

import PostSingle from './PostSingle';

const EditPost = ({token, setPosts, posts}) => {
  const [title, setTitle] = useState ('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState ('');
  const [location, setLocation] = useState('');
  const [willDeliver, setWillDeliver] = useState (false)
  
  const { postId } = useParams();
  const history = useHistory();

  const post = posts.find(post => post._id === postId);

  const handleAdd = async (ev) => {
    ev.preventDefault();
    console.log({location, description});
    const postResp = await callApi({
      url: `/posts/${postId}`,
      method: 'PATCH',
      token,
      body: {
        post: {
          title,
          description,
          price,
          location,
          willDeliver
        }
      }
    });
    console.log('postResp: ', postResp);
    // fetch the posts again, adding our token
    const postsResp = await callApi({url: '/posts', token});
    console.log('postsResp: ', postsResp);
    // set the posts on state
    setPosts(postsResp.data.posts);
    history.push('/posts')
  }
  
  return <>
    <h1>Edit Post</h1>

    <PostSingle post={post} />

    <form onSubmit={handleAdd}>
      {/* <input type="text" placeholder="write your title here" value={title} onChange={(event) => setTitle(event.target.value)}></input>
      <input type="text" placeholder="description" value={description} onChange={(event) => setDescription(event.target.value)}></input>
      <input type="text" placeholder="enter your price here" value={price} onChange={(event) => setPrice(event.target.value)}></input>
      <input type="text" placeholder="location" value={location} onChange={(event) => setLocation(event.target.value)}></input>
      <select type="text" placeholder="will you deliver the item" value={willDeliver} onChange={(event) => setWillDeliver(event.target.value)}>
        <option value="willdeliver">will deliver?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>     */}
    <fieldset>
        <label>Title: </label>
        <input type="text" placeholder={`${post && post.title}`} value={title} onChange={(event) => setTitle(event.target.value)}></input>    
    </fieldset>

    <fieldset>
        <label>Description: </label>
        <input type="text" placeholder={`${post && post.description}`} value={description} onChange={(event) => setDescription(event.target.value)}></input>    
    </fieldset>

    <fieldset>
        <label>Price: </label>
        <input type="text" placeholder={`${post && post.price}`} value={price} onChange={(event) => setPrice(event.target.value)}></input>    
    </fieldset>

    <fieldset>
        <label>Location: </label>
        <input type="text" placeholder={`${post && post.location}`} value={location} onChange={(event) => setLocation(event.target.value)}></input>    
    </fieldset>

    <fieldset>
    <label>Will Deliver: </label>
      <select type="text" placeholder={`${post && post.willDeliver}`} value={willDeliver} onChange={(event) => setWillDeliver(event.target.value)}>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>    
    </fieldset>
      <button type="submit">Add post</button>
    </form>
  </>
}


export default EditPost;