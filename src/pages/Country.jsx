import React, { startTransition, useEffect, useTransition } from 'react'
import { getCountryData } from '../api/postApi';
import { Loader } from '../components/UI/Loader';
import { useState } from 'react';
import { CountryCard } from '../components/Layout/CountryCard';
import { SearchFilter } from '../components/UI/SearchFilter';

export const Country = () => {
  const [isPending, StartTransition]  = useTransition();
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState()
  const [filter, setFilter] = useState("All")

useEffect(() => {
  
  startTransition(async() =>{
    const res = await getCountryData();
    console.log(res);
    setCountries(res.data)
    
  })
}, [])

  if(isPending) return <Loader/>


  const searchCountry = (country) =>{
    if(search){
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    else{
      return country;
    }
  }

  const filterRegion = (country) =>{
    if(filter === "All"){
      return country;
    }
    else{
      return country.region === filter;
    }
  }

  
  // here is main logic

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );


  return (
    <section className='country-section'>
      <SearchFilter
       search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter = {setFilter}
        countries = {countries}
        setCountries = {setCountries}
      />
      <ul className='grid grid-four-cols'>
        {
          filterCountries.map((curCountry, index) => {
            return <CountryCard Country={curCountry} key={index}/>;
          })
        }
      </ul>

    </section>
  )
}
