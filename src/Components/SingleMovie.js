import React from 'react';
import '../post.css';
import Post from './Post';
import {useParams} from 'react-router-dom';


function SingleMovie({movies}) {
  const {id} = useParams();
  console.log ({id});
    
console.log({movies});

const movieId = {id};
console.log(movieId);
/* const value = movieId.va
console.log(value); */

const test = "kathleen"

const getsinglemovie = movies.filter (el => el.fields.person === test);

console.log(getsinglemovie)

return (
    <div className="postcontainer">
        <div > 
           {getsinglemovie.map((item, index) => <Post item={item} key={index}/>)}
        </div>
    </div> 
        
    )
}

export default SingleMovie
