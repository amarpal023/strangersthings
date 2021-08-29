import React, { useState, useEffect} from 'react';
import PostSingle from './PostSingle';
// import { callApi } from '../util';

function Search({posts, setPosts}) {
    // const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // useEffect(() => {
    //     fetchPosts();
    // }, []);

    // const fetchPosts = async () => {
    //     const url = 'https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/posts';
    //     const response = await fetch(url);
    //     const result = await response.json();
    //     setPosts(result);
    //     setSearchTerm(result);
    // };

//     return ( 
//         <div className="Search">
//             <input type="text" placeholder="Search..." onChange={(event) => {setSearchTerm(event.target.value);
//             }}
//             />
//             {
//             posts.filter((val) => {
//                 if (searchTerm == "") {
//                     return val
//                 } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
//                     return val
//                 }
//             }).map((val, key) => {
//                 return (
//                     <PostSingle post={val} key={key}/>
//                     // <div className="item" key={key}>
//                     // <p>{val.title}</p>
//                     // </div>
//                 );
//             })}
//         </div>
//     );
return <></>
}
export default Search;
