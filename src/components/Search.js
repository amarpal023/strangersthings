import React, { useState, useEffect} from 'react';
import PostSingle from './PostSingle';
// import { callApi } from '../util';

function Search({posts, setPosts}) {
    // const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const postMatches = (post, text) => {
        let check = post.includes(text);
        return check;
    }
    const handleSubmit = () => {
        const filteredPosts = posts.filter(post => postMatches(post.title.toLowerCase(), searchTerm));
        // const postsToDisplay = searchTerm.length ? filteredPosts : posts;
        setPosts(filteredPosts);
        if (!searchTerm.length) {
            fetchPosts();
        }
    }
    const fetchPosts = async () => {
        const response = await callApi({
            url: '/posts',
});
const allPosts = response.data.posts;
        if(allPosts) setPosts(allPosts);
    }
    
return <>
<form onSubmit={(ev) => {
    ev.preventDefault()
    handleSubmit()
}}>
    <input type="text" placeholder="search..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}></input>
    <button type="submit">Search</button>
</form>

</>
}
export default Search;
