// import { useEffect, useState, useTransition } from "react";
// import { NavLink, useParams } from "react-router-dom";
// import { getCountryIndData } from "../../api/postApi";
// import { Loader } from "../UI/Loader";

// export const CountryDetails = () => {
//   const params = useParams();

//   const [isPending, startTransition] = useTransition();
//   const [country, setCountry] = useState();

//   useEffect(() => {
//     startTransition(async () => {
//       const res = await getCountryIndData(params.id);
//       // console.log(res);
//       if (res.status === 200) {
//         setCountry(res.data[0]);
//       }

//       // console.log(Object.keys(res.data[0].name.nativeName));
//     });
//   }, []);

//   if (isPending) return <Loader />;

//   return (
//     <section className="card country-details-card container">
//       <div className="container-card bg-white-box">
//         {country && (
//           <div className="country-image grid grid-two-cols">

//             <img
//               src={country.flags.svg}
//               alt={country.flags.alt}
//               className="flag"
//             />
            
//             <div className="country-content">
//               <p className="card-title"> {country.name.official} </p>

//               <div className="infoContainer">

//                 <p>
//                   <span className="card-description"> Native Names:</span>
//                   {Object.keys(country.name.nativeName)
//                     .map((key) => country.name.nativeName[key].common)
//                     .join(", ")}
//                 </p>

//                 <p>
//                   <span className="card-description"> Population: </span>
//                   {country.population.toLocaleString()}
//                 </p>

//                 <p>
//                   <span className="card-description"> Region: </span>
//                   {country.region}
//                 </p>

//                 <p>
//                   <span className="card-description"> Sub Region: </span>
//                   {country.subregion}
//                 </p>

//                 <p>
//                   <span className="card-description"> Capital: </span>
//                   {country.capital}
//                 </p>

//                 <p>
//                   <span className="card-description">Top Level Domain: </span>
//                   {country.tld[0]}
//                 </p>

//                 <p>
//                   <span className="card-description"> Currencies: </span>
//                   {Object.keys(country.currencies)
//                     .map((curElem) => country.currencies[curElem].name)
//                     .join(", ")}
//                 </p>

//                 <p>
//                   <span className="card-description">Currencies_Symbol: </span>
//                   {Object.keys(country.currencies)
//                     .map((val) => country.currencies[val].symbol)
//                     .join(", ")}
//                 </p>

//                 <p>
//                   <span className="card-description">Languages: </span>
//                   {Object.keys(country.languages)
//                     .map((key) => country.languages[key])
//                     .join(", ")}
//                 </p>
                
//               </div>
//             </div>
//           </div>
//         )}
//         <div className="country-card-backBtn">
//           <NavLink to="/country" className="backBtn">
//             <button>Go Back</button>
//           </NavLink>
//         </div>
//       </div>
//     </section>
//   );
// };


import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import { Loader } from "../UI/Loader";

export const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching data for:", params.id);

    if (!params.id) {
      setError("Invalid country ID.");
      return;
    }

    startTransition(async () => {
      try {
        const res = await getCountryIndData(params.id);
        if (res.error) {
          setError("Failed to fetch country data.");
        } else if (res.status === 200) {
          setCountry(res.data[0]);
        }
      } catch (err) {
        console.error("Error in API call:", err);
        setError("An error occurred while fetching data.");
      }
    });
  }, [params.id]); // Added dependency to refetch if params.id changes

  if (isPending) return <Loader />;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        {country && (
          <div className="country-image grid grid-two-cols">
            <img src={country.flags.svg} alt={country.flags.alt} className="flag" />

            <div className="country-content">
              <p className="card-title">{country.name.official}</p>

              <div className="infoContainer">
                {country.name.nativeName && (
                  <p>
                    <span className="card-description"> Native Names:</span>
                    {Object.keys(country.name.nativeName)
                      .map((key) => country.name.nativeName[key].common)
                      .join(", ")}
                  </p>
                )}

                <p>
                  <span className="card-description"> Population: </span>
                  {country.population.toLocaleString()}
                </p>

                <p>
                  <span className="card-description"> Region: </span>
                  {country.region}
                </p>

                <p>
                  <span className="card-description"> Sub Region: </span>
                  {country.subregion}
                </p>

                <p>
                  <span className="card-description"> Capital: </span>
                  {country.capital}
                </p>

                <p>
                  <span className="card-description">Top Level Domain: </span>
                  {country.tld && country.tld[0]}
                </p>

                {country.currencies && (
                  <>
                    <p>
                      <span className="card-description"> Currencies: </span>
                      {Object.keys(country.currencies)
                        .map((curElem) => country.currencies[curElem].name)
                        .join(", ")}
                    </p>

                    <p>
                      <span className="card-description"> Currencies Symbol: </span>
                      {Object.keys(country.currencies)
                        .map((val) => country.currencies[val].symbol)
                        .join(", ")}
                    </p>
                  </>
                )}

                {country.languages && (
                  <p>
                    <span className="card-description">Languages: </span>
                    {Object.keys(country.languages)
                      .map((key) => country.languages[key])
                      .join(", ")}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="country-card-backBtn">
          <NavLink to="/country" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
