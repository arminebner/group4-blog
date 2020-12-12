import React from 'react'

function Post({item}) {

    return (
        <div>
            <div>{item.fields.name}</div>
            <iframe title="elf" src={item.fields.trailer} width="560" height="315"></iframe>
            <div>{item.fields.director}</div>
            <div>{item.fields.rating}</div>
            <div>{item.fields.stars}</div>
            <div>{item.fields.year}</div>
            <div>{item.fields.description}</div>
            <img  alt="movieimage"/>
        </div>
    )
}

export default Post
