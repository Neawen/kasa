import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.scss"
import orangeHouse from "../../assets/images/kasa-orange.png"

const Header = () => {

    return (
        <header className='header'>
            <h1 className='header_title'><span>K</span><img src={orangeHouse} alt='maison orange'></img><span>s</span><span>a</span></h1>
            <nav className='header_nav'>
                {/* if one of the links is active, add class active */}
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Accueil</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>À propos</NavLink>
            </nav>
        </header>
    );
};

export default Header;