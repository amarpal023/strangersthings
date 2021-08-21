import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const apiUrl = `https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT`;

const Posts = () => {

    const [posts, setPosts] = useState([]);
    console.log('posts: ', posts);

    useEffect(() => {
        const fetchPosts = async () => {
            const resp = await fetch(`${apiUrl}/posts`);
            const data = await resp.json();
            setPosts(data.data.posts);
        }
        fetchPosts();
    }, [])
  
    return <>
        
        {
            posts.map(post => <div key={post._id}>
                <h3>{post.title}</h3>
                <div>{post.description}</div>
                <div>Price: {post.price}</div>
                <div>Seller: {post.author.username}</div>
                <div>Location: {post.location}</div>
            </div>)
        }
    </>
}

export default Posts;
