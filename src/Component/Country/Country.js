import React from 'react';
import "./Country.css"
const Country = (props) => {
    //destructuring
    const { population, area, name, flags } = props.country

    return (
        <div className='country'>
            {/* Destructuring way */}
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            {/* simple way */}
            {/* <h2>Country Name: {props.country.name.common}</h2>
            <p>Population: {props.population}</p>
            <p>Area: {props.country.area}</p> */}
        </div>
    );
};

export default Country;