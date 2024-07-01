import React, { useState } from 'react';
import "../Collapse/Collapse.scss";
import arrow from "../../assets/images/arrow-back.png";

// house from App.js
// aboutData from pages/About.js
const Collapse = ({ house, aboutData }) => {
    // table to add index of open Sections
    const [openText, setOpenText] = useState([]);

    function handleArrow(index) {
        // if index clicked is not in openText Table
        if (!openText.includes(index)) {
            setOpenText([...openText, index]);
        } else {
            // return openText table without the index clicked
            setOpenText(openText.filter(table => table !== index));
        }
    }

    return (
        <section className='sectionCollapse'>
            {aboutData ? aboutData.map((item, index) => (
                <article className='sectionCollapse__article' key={index}>
                    <div className='sectionCollapse__article__containerTitle'>
                        <h2>{item.title}</h2>
                        <img
                            src={arrow}
                            alt="flèche directionnelle"
                            onClick={() => handleArrow(index)}
                            // if openText includes index of the section, add openArrow Class
                            className={openText.includes(index) ? "openArrow" : null}></img>
                    </div>
                    {/* if index is in OpenText table, add openText Class */}
                    <p className={`sectionCollapse__article__description ${openText.includes(index) ? "openText" : null}`}>
                        {item.content}
                    </p>
                </article>
            )) : 
            <div>{house.title}</div>
            }
        </section>
    );
};

export default Collapse;