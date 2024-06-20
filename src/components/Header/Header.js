import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss"

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header_title'>K<i className="fa-solid fa-house" alt="maison"></i>sa</h1>
            <nav className='header_nav'>
                <Link to="/">Accueil</Link>
                <Link to="/about">À propos</Link>
            </nav>
        </header>
    );
};

export default Header;