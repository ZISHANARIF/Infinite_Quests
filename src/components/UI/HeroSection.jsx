import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <main className='hero-section main'>
    <div className='container grid grid-two-cols'>

      <div className='hero-content'>

        <h1 className='heading-xl'>
        Venture the Earth, Reveal Infinite Universe.
        </h1>

        <p className="paragraph">
        Explore the vibrant continents, each with its unique charm,
        and journey through the vast, infinite universe where stars,
        galaxies, and mysteries beckon. Discover new worlds, uncover
        hidden treasures, and experience a fusion of Earthly wonders
        and cosmic marvels. From the Earth’s wonders to the universe's
        endless expanse, an adventure awaits—where the world and the 
        stars collide in breathtaking exploration!
        </p>
                <NavLink to ={`/country`}>
                    <button>Start Exploring <FaArrowRight /></button>
                </NavLink>

      </div>

      <div className='hero-image '>
        <img src='/Images/new.webp' alt='world beauty' className='banner-image'/>
      </div>

    </div>
  </main>
  )
}
