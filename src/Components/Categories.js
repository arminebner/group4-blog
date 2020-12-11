import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Post from './Post';

function Categories( {match} ) {
    console.log('aus categories' + match.params);
    
    return (
        <div>
            <h1>hello from categories</h1>
            <div>
                <NavLink to="/singlecategories">
                    <img src='' alt="cinema"/>
                </NavLink>
                <NavLink to="/singlecategories">
                    <img src='' alt="cinema"/>
                </NavLink>
                <NavLink to="/singlecategories">
                    <img src='' alt="cinema"/>
                </NavLink>  
            </div>
            <div>
                {/* {props.map((item, index) => <Post item={item} key={index}/>)} */}
            </div>
        </div>
    )
}

export default Categories
