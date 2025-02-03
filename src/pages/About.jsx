import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import planetCard from "../api/galaxyCard.json";

export const About = () => {
  return (
    <section className='country-section'>
      <ul className='grid grid-four-cols'>

        {planetCard.map(({ id, Name, types, Example, image }) => (

          <li key={id} className='country-card card'>

            <div className='container-card bg-white-box'>

              <div className='countryInfo containerPla'>

                <img src={image} alt={Name} className='planet-image' />

                <p className='card-title'>{Name}</p>

                <p><span className='card-description'>TYPES: </span>{types.slice(0, 16)}</p>

                <p><span className='card-description'>EXAMPLE: </span>{Example.slice(0, 16)}</p>
                
                <NavLink to={`/about/${id}`}>
                  <button>More Details <FaArrowRight /></button>
                </NavLink>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
