import React from 'react'
import { NavLink } from 'react-router-dom'
import cinema2 from '../img/cinema2.jpg'

const Homepage = () => {
    return (
        <div>
            <h1>Group 4 favorite movies</h1>
            <NavLink to="/categories">
                <img src={cinema2} alt="cinema"/>
            </NavLink>
        </div>
    )
}

export default Homepage
