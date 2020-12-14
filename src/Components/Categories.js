import React from 'react';
import {NavLink} from 'react-router-dom';
/* import Post from './Post'; */

function Categories({movies}) {
    
   
  
    return (
        <div className='categories'>
            <h1>Our favorite Movies</h1>
            <div>
                <NavLink to="/singlecategories/kathleen">
                    <img src='' alt="cinema"/>
                </NavLink>
                <NavLink to="/singlecategories/patricia">
                    <img src='' alt="cinema"/>
                </NavLink>
                <NavLink to="/singlecategories/armin">
                    <img src='' alt="cinema"/>
                </NavLink>  
            </div>
            <div>
                {movies.map((item, index) => (<NavLink to={`/singlemovie/${item.fields.numid}`}><img key={index} src={item.fields.image.fields.file.url} alt="movies"/></NavLink>)
              )}
            </div>
        </div>
    )
}

export default Categories
