import React from 'react';
import { NavLink} from 'react-router-dom';
import Post from './Post';

function Categories( {movies} ) {
    
    
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
                {movies.map((item, index) => <Post item={item} key={index}/>)}
            </div>
        </div>
    )
}

export default Categories
