import React from 'react';
import {NavLink} from 'react-router-dom';
/* import Post from './Post'; */

function Categories({movies}) {
    
   
  
    return (
        <div>
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
                {movies.map((item, index) => (<NavLink to={`/categories/${item.fields.numid}`}><img key={index} src={item.fields.image.fields.file.url} alt="movies"/></NavLink>)
              )}
            </div>
        </div>
    )
}

export default Categories
