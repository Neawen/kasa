import React, { useState } from 'react';
import "../Collapse/Collapse.scss";
import arrow from "../../assets/images/arrow-back.png";

// house from App and Housing
// aboutData from pages/About.js
// data from About (contains data title of articles)
const Collapse = ({ house, aboutData, data }) => {
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
        <section className={`sectionCollapse ${data && "sectionCollapse--housing"}`}>
            {(aboutData ? aboutData : data).map((item, index) => (
                <article
                    className={`sectionCollapse__article 
                        ${data && "article--housing"}
                        ${openText.includes(`key-${index}`) ? "open" : null}`
                    }
                    key={`key-${index}`}
                >
                    <div className='sectionCollapse__article__containerTitle'>
                        <h2>{aboutData ? item.title : item}</h2>
                        <img
                            src={arrow}
                            alt="flèche directionnelle"
                            onClick={() => handleArrow(`key-${index}`)}
                            // if openText includes index of the section, add openArrow Class
                            className={openText.includes(`key-${index}`) ? "openArrow" : null}></img>
                    </div>
                    {/* if index is in OpenText table, add openText Class */}
                    <div className={`sectionCollapse__article__description ${openText.includes(`key-${index}`) ? "openText" : null}`}>
                        <div>
                            {aboutData ? <p>{item.content}</p>
                                : (item === "Description" ? <p>{house.description}</p>
                                    : <ul style={{ listStyleType: "none", padding: 0 }}>
                                        {/* for each element in equipment table */}
                                        {house.equipments.map((equipment, i) => (
                                            <li key={`${equipment}-${i}`}>
                                                {equipment}
                                            </li>
                                        ))}
                                    </ul>
                                )
                            }
                        </div>
                    </div>
                </article>
            ))}
        </section>
    )
}


// ))
//     : data.map((element, index) => (
//         <article
//             // class is use to hide or not the background of articles
//             className={`sectionCollapse__article article--housing ${openText.includes(`data-${index}`) ? "open" : null}`}
//             key={`data-${index}`}
//         >
//             <div className='sectionCollapse__article__containerTitle'>
//                 <h2>{element}</h2>
//                 <img
//                     src={arrow}
//                     alt="flèche directionnelle"
//                     onClick={() => handleArrow(`data-${index}`)}
//                     // if openText includes index of the section, add openArrow Class
//                     className={openText.includes(`data-${index}`) ? "openArrow" : null}
//                 ></img>
//             </div>
//             {/* if index is in OpenText table, add openText Class */}
//             <div className={`sectionCollapse__article__description ${openText.includes(`data-${index}`) ? "openText" : null}`}>
//                 {/* if item is description */}
//                 {element === "Description" ?
//                     // add house.description
//                     house.description
//                     : <ul style={{ listStyleType: "none", padding: 0 }}>
//                         {/* for each element in equipment table */}
//                         {house.equipments.map((equipment, i) => (
//                             <li key={`${equipment}-${i}`}>
//                                 {equipment}
//                             </li>
//                         ))
//                         }
//                     </ul>
//                 }
//             </div>
//         </article>
//     ))

// }

//             ));
// };

export default Collapse;