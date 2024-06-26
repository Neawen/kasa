import React from 'react';
import './Banner.scss';


const Banner = ({ banner, showText, filterOpacity, boxShadow }) => {

    return (
        <section className='banner'>
            <img src={banner} alt='Paysage' className='banner__img'></img>
            <div
                className='banner__filter'
                style={{
                    backgroundColor: `rgba(0, 0, 0, ${filterOpacity})`,
                    // if boxShadow is true, add boxShadow else don't
                    boxShadow: boxShadow ? "0 0.2rem 0.2rem rgba(0, 0, 0, 0.3)" : null
                }}>
                {/* If showText is true, add text in the banner */}
                {showText && <p>Chez vous, partout et ailleurs</p>}
            </div>
        </section>
    );
};

export default Banner;