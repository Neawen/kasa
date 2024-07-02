import React from 'react';
import Collapse from '../../components/Collapse/Collapse';
import Slideshow from "../../components/Slideshow/Slideshow";
import "./Housing.scss";

function Housing({ house }) {
    console.log(house);

    const data = [
        "Description",
        "Équipements"
    ]

    function rating(rating) {
        const stars = [];

        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<i className="fa-solid fa-star orangeStar" key={`star-${i}`}></i>);
            } else {
                stars.push(<i className="fa-solid fa-star greyStar" key={`star-${i}`}></i>);
            }
        }

        return stars;
    }

    return (
        <main className='main'>
            <Slideshow house={house}></Slideshow>
            <section className='section-resume'>
                <div className='section-resume__containerTitle'>
                    <h2>{house.title}</h2>
                    <p>{house.location}</p>
                    <div className='section-resume__containerTitle__tags'>
                        {house.tags.map((item, index) => (
                            <p key={`${item}-${index}`}>{item}</p>
                        ))}
                    </div>
                </div>
                <div className='section-resume__containerHost'>
                    <div className='section-resume__containerHost__name'>
                        <p>{house.host.name}</p>
                        <img src={house.host.picture} alt='Hôte du logement'></img>
                    </div>
                    <div className='section-resume__containerHost__rating'>
                        {rating(house.rating)}
                    </div>
                </div>
            </section>
            <Collapse house={house} data={data}></Collapse>
        </main>
    );
};

export default Housing;