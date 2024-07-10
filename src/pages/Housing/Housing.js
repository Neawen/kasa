import React from 'react';
import Collapse from '../../components/Collapse/Collapse';
import Slideshow from "../../components/Slideshow/Slideshow";
import Host from '../../components/Host/Host';

function Housing({ house }) {
    console.log(house);

    const data = [
        "Description",
        "Équipements"
    ]

    return (
        <main className='main'>
            <Slideshow house={house}></Slideshow>
            <Host house={house}></Host>
            <Collapse house={house} data={data}></Collapse>
        </main>
    );
};

export default Housing;