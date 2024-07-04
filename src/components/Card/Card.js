import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

// housing from Home
const Card = ({ housing }) => {
    return (
        <ul className='container-housing'>
            {housing.map((house, index) => (
                <li key={index} className='container-housing__house'>
                    <Link to={`/housing/${house.id}`}>
                        <img src={house.cover} alt={house.title}></img>
                        <p>{house.title}</p>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Card;