import React, { useState } from 'react';
import { callApi } from '../util';

const AddPost = ({token, setPosts}) => {
  const [title, setTitle] = useState ('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState ('');
  const [location, setLocation] = useState('');
  const [willDeliver, setWillDeliver] = useState (false)
  

  const handleAdd = async (ev) => {
    ev.preventDefault();
    console.log({location, description});
    const postResp = await callApi({
      url: '/posts',
      method: 'POST',
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
  }
  
  return <>
    <h1>Add post</h1>
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
        <label>Title</label>
        <input type="text" placeholder="write your title here" value={title} onChange={(event) => setTitle(event.target.value)}></input>    
    </fieldset>

    <fieldset>
        <label>Description</label>
        <input type="text" placeholder="write your description here" value={description} onChange={(event) => setDescription(event.target.value)}></input>    
    </fieldset>

    <fieldset>
        <label>Price</label>
        <input type="text" placeholder="enter your price here" value={price} onChange={(event) => setPrice(event.target.value)}></input>    
    </fieldset>

    <fieldset>
        <label>Location</label>
        <input type="text" placeholder="enter your location" value={location} onChange={(event) => setLocation(event.target.value)}></input>    
    </fieldset>

    <fieldset>
    <label>Will Deliver</label>
      <select type="text" placeholder="will you deliver the item" value={willDeliver} onChange={(event) => setWillDeliver(event.target.value)}>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>    
    </fieldset>
      <button type="submit">Add post</button>
    </form>
  </>
}


export default AddPost;