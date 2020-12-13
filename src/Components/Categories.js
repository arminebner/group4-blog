import React from 'react';
import { NavLink} from 'react-router-dom';
import Post from './Post';

function Categories( {movies} ) {
    
    
    return (
        <div className='categories'>
            <h1>Our favorite Movies</h1>
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
