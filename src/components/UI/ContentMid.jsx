import React from 'react'
import countryFacts from "../../api/countryData.json"
import planetFacts from "../../api/galaxyData.json"



export const ContentMid = () => {
  return (
    <section className='section-about container'>

      <h2 className='container-title'>
      Reveal hidden realms, explore continents' marvels!
      </h2>

      <div className='gradient-cards'>
      

        {
          countryFacts.map((country) => {
            const {id, continentName, majorCity, population, interestingFact} = country;

            return( 
              <div className='card' key = {id}>
              
                <div className='container-card bg-blue-box'>

                  <p className='card-title'>{continentName}</p>
                  
                  <p>
                    <span className='card-description'>MajorCity: {majorCity}</span>
                  </p>

                  <p>
                    <span className='card-discription'>Continent_Population: {population}</span>                  
                  </p>

                  <p>
                    <span className='card-discription'> Interestion facts: {interestingFact}</span>                 
                  </p>
                
                </div>

              </div>
              
            )
          })
        }
      </div>

      <h2 className='container-title'>
      Reveal the Infinite Wonders of the Universe!
      </h2>

      <div className='gradient-cards'>
      

        {
          planetFacts.map((planet) => {
            const {id, AstronomyName, Size, Types, Examples, Formation} = planet;

            return( 
              <div className='card' key = {id}>
              
                <div className='container-card bg-blue-box'>

                  <p className='card-title'>{AstronomyName}</p>
                  
                  <p>
                    <span className='card-description'>SIZE: {Size.slice(0, 30) + "..."}</span>
                  </p>

                  <p>
                    <span className='card-discription'>TYPES: {[Types.slice(0, 30) + "..."]}</span>                  
                  </p>


                  <p>
                    <span className='card-discription'> EXAMPLE: {[Examples.slice(0, 30) + "..."]}</span>                 
                  </p>
                  <p>
                    <span className='card-discription'> FORMATION: {Formation.slice(0, 40) + "..."}</span>                 
                  </p>
                
                </div>

              </div>
              
            )
          })
        }
      </div>



    </section>
    
  )
}
