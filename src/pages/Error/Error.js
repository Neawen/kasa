import React from 'react';
import { Link } from 'react-router-dom';
import "./Error.scss";

function Error() {
    return (
        <main className='main main-Error'>
            <h2 className='main-Error__title'>404</h2>
            <p className='main-Error__text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to={"/"} className='main-Error__link'>Retourner sur la page d'accueil</Link>
        </main>
    );
};

export default Error;