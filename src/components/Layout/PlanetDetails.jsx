import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import PlanetDet from "../../api/planetDetails.json";
import { FaArrowLeft } from "react-icons/fa";

export const PlanetDetails = () => {
  const { id } = useParams(); // Get planet ID from URL
  const planet = PlanetDet.find(p => p.id === parseInt(id)); // Find planet by ID

  // if (!planet) {
  //   return <h2 className="error-message">Planet details not found.</h2>;
  // }
  const formattedAns = planet.DetailsExplaination.join("\n");

  return (
    <section className='country-section'>
      <div className='container-card bg-white-box'>
        <div className='countryInfo containerPla'>
          <p className='card-title'>NAME: {planet.Name}</p>
          <p className='card-description'>DISCOVERY YEAR: {planet.DiscoveryYear}</p>
          <p className='card-description'>ORBIT PERIOD: {planet.OrbitPeriod}</p>
          <p className='card-description'>DIAMETER: {planet.Diameter}</p>
          <p className='card-description'><span>EXAMPLE: </span>{planet.Example}</p>
          <p className='card-title'><span>Unlocking the Secrets: </span>{planet.DetailsExplaination.map((line, index) => (
              <span key={index}>{line}<br /></span>
              ))}
          </p>
          
          {/* <pre className= 'card-title'><span>Ans: </span>{formattedAns}</pre> */}

          <NavLink to="/about">
            <button><FaArrowLeft /> Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
