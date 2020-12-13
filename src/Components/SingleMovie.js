import React from 'react';
import '../post.css';
import Post from './Post'


function SingleMovie({movies}) {

console.log(movies)


return (
    <div className="postcontainer">
        <div > 
           {movies.map((item, index) => <Post c item={item} key={index}/>)}
        </div>
    </div> 
        
    )
}

export default SingleMovie
