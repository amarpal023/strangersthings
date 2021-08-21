import React, {useState} from 'react';

const apiUrl = `https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT`;



const NewPost = ({token}) => {
    const [title, setTitle] = useState ('')
    const [description, setDescription] = useState ('')
    const [price, setPrice] = useState ('')
    const [location, setLocation] = useState ('')
    const [willDeliver, setWillDeliver] = useState (false)
    return <>
    <h1>Create a Post</h1>

    <form onSubmit={async (event) => {
        event.preventDefault();
        
        fetch(`${apiUrl}/posts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                title,
                description,
                price,
                location,
                willDeliver
                }
            })
            }).then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .catch(console.error);
        
    }}>
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
    
<button type="submit">Post</button>

    </form>
    </>
}


export default NewPost;