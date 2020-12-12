import React from 'react'
import Post from './Post'


function SingleMovie({ movies }) {
    console.log(movies)
    return (
        <div>
           {movies.map((item, index) => <Post item={item} key={index}/>)}
        </div>
    )
}

export default SingleMovie
