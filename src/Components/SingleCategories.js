import React from 'react';
import {useParams} from 'react-router-dom';
import '../post.css';
import Post from './Post';


function SingleCategories({movies}) {
const {person} = useParams ();

console.log({person})

const getsinglemovie = movies.filter (el => el.fields.person === {person});

console.log(getsinglemovie)

return (
    <div className="postcontainer">
        <div > 
           {getsinglemovie.map((item, index) => <Post item={item} key={index}/>)}
           {person}
        </div>
    </div> 
        
    )
}

export default SingleCategories
