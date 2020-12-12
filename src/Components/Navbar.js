import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="inner-container">
                <div className="lightbox">
                    <div className="letter-container">
                        <div className="letter">C</div>
                        <div className="letter">I</div>
                        <div className="letter">N</div>
                        <div className="letter">E</div>
                        <div className="letter">M</div>
                        <div className="letter">A</div>
                    </div>
                </div>
                <ul>
                    <NavLink className='navbar-link' to='/'><li>HOME</li></NavLink>
                    <NavLink className='navbar-link' to='/categories'><li>CATEGORIES</li></NavLink>
                    <NavLink className='navbar-link' to='/singlecategorie/kathleen'><li>KATHLEEN</li></NavLink>
                    <NavLink className='navbar-link' to='/singlecategorie/patricia'><li>PATRICIA</li></NavLink>
                    <NavLink className='navbar-link' to='/singlecategorie/armin'><li>ARMIN</li></NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
