import React from 'react';
import Collapse from '../../components/Collapse/Collapse';
import Slideshow from "../../components/Slideshow/Slideshow";

function Housing({ house }) {
    console.log(house);
    return (
        <main className='main'>
            <Slideshow house={house}></Slideshow>
            <Collapse house={house}></Collapse>
        </main>
    );
};

export default Housing;