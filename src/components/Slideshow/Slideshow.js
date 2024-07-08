import React, { useState } from 'react';
import arrow from "../../assets/images/arrow-back.png";
import "./Slideshow.scss";

// house === housing mapped from App.js then Housing.js
const Slideshow = ({ house }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    function nextSlide() {
        setCurrentIndex((currentIndex) =>
            // if currentIndex is the last element, then click is element 0 else +1
            currentIndex === house.pictures.length - 1 ? 0 : currentIndex + 1
        );
    }

    function previousSlide() {
        setCurrentIndex((currentIndex) =>
            // if currentIndex is the first element, then click is the last element else -1
            currentIndex === 0 ? house.pictures.length - 1 : currentIndex - 1
        );
    }

    return (
        <section className='section-gallery'>
            <img
                src={house.pictures[currentIndex]}
                alt={house.title}
                className="section-gallery__photo"></img>
            
            {/* if house.pictures.length is superior or equal to 2 */}
            {house.pictures.length >= 2
                && (<>
                    <img
                        src={arrow}
                        alt="flèche directionnelle"
                        className='section-gallery__arrow-left'
                        // currentIndex - 1, else currentIndex is the last element of house.pictures
                        onClick={previousSlide}></img>
                    <img
                        src={arrow}
                        alt="flèche directionnelle"
                        className='section-gallery__arrow-right'
                        // currentIndex + 1, else currentIndex comeback to 0
                        onClick={nextSlide}></img>
                    <div className='section-gallery__number'>
                        {currentIndex + 1}/{house.pictures.length}
                    </div>
                </>)
            }
        </section>
    );
};

export default Slideshow;