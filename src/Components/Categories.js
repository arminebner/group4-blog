import React from 'react';
import {NavLink} from 'react-router-dom';
/* import Post from './Post'; */
import '../armin.css'
import cinema2 from '../img/cinema2.jpg'

function Categories({movies}) {
    
   
  
    return (
        <div className='categories'>
            <h1 className='categories-favorite'>Our favorite Movies</h1>
            <div className='singlecategory-link'>
                <NavLink to="/singlecategories/kathleen">
                    <img src={cinema2} alt="cinema"/>
                </NavLink>
                <NavLink to="/singlecategories/patricia">
                    <img src={cinema2} alt="cinema"/>
                </NavLink>
                <NavLink to="/singlecategories/armin">
                    <img src={cinema2} alt="cinema"/>
                </NavLink>  
            </div>
            <div className="grid-container">
                <h2 className='categories-all'>All movies</h2>
                <div className='category-grid'>
                    {movies.map((item, index) => (<NavLink to={`/singlemovie/${item.fields.numid}`}><img className='grid-image' key={index} src={item.fields.image.fields.file.url} alt="movies"/></NavLink>))}
                </div>
            </div>
        </div>
    )
}

export default Categories
