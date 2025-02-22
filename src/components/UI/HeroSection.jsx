import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';


export const HeroSection = () => {

  // const [greeting, setGreeting] = useState("");
  
  // useEffect(() => {
  //   const hour = new Date().getHours();
  //   if (hour < 12) setGreeting("Good Morning, Explorer!");
  //   else if (hour < 18) setGreeting("Good Afternoon, Adventurer!");
  //   else setGreeting("Good Evening, Stargazer!");
  // }, []);
  

  return (
    <main className='hero-section main'>
    <div className='container grid grid-two-cols'>

      <div className='hero-content'>

        <h1 className='heading-xl'>
          {/* {greeting} */}
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
        <img loading="lazy" src='/Images/new.webp' alt='world beauty' className='banner-image'/>
      </div>

    </div>
  </main>
  )
}
