import React, { useState } from 'react';
import { callApi } from '../util';
import { useHistory } from 'react-router';

const MessageForm = ({post, token}) => {
    const [content, setContent] = useState('');
    const history = useHistory()
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const url =`/posts/${post._id}/messages`;
        const data = await callApi({
            method: 'POST',
            url,
            token,
            body: {
                message: {
                    content
                }
            }
        });
        history.push('./')
    }
    return <>
    {
        token && !post.isAuthor ? 
        <form onSubmit={handleSubmit}>
        <input value={content} placeholder="content" onChange={(ev) => setContent(ev.target.value)}></input>
        <button type="submit">Add Message to Post</button>
        </form> : ''

    }
       
    </>
}

export default MessageForm;

