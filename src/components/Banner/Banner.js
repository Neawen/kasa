import React from 'react';
import './Banner.scss';


const Banner = ({ banner, showText, filterOpacity, boxShadow }) => {

    return (
        <section className='banner'>
            <img src={banner} alt='Paysage' className={`banner__img ${boxShadow && "shadow"}`}></img>
            <div
                className='banner__filter'
                style={{
                    backgroundColor: `rgba(0, 0, 0, ${filterOpacity})`}}>
                {/* If showText is true, add text in the banner */}
                {showText && <p>Chez vous, partout et ailleurs</p>}
            </div>
        </section>
    );
};

export default Banner;