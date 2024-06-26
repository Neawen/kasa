import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

const Card = ({ housing }) => {
    console.log(housing);
    return (
        <ul className='containerHousing'>
            {housing.map((house, index) => (
                <li key={index} className='containerHousing__house'>
                    <Link to={`/housing/${house.id}`} id={housing.id} housing={housing}>
                        <img src={house.cover} alt={house.title}></img>
                        <p>{house.title}</p>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Card;