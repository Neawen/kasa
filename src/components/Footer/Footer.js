import React from 'react';
import "./Footer.scss";
import whiteHouse from "../../assets/images/kasa-light.png";

const Footer = () => {
    return (
        <footer className='footer'>
            <h2 className='footer_title'><span>K</span><img src={whiteHouse} alt='maison blanche'></img><span>s</span><span>a</span></h2>
            <p className='footer_text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;