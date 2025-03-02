// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://restcountries.com/v3.1",
// });

// // HTTP GET METHOD
// export const getCountryData = () => {
//   return api.get("/all?fields=name,population,region,capital,flags");
// };

// // HTTP GET METHOD fro the indvi. country name
// export const getCountryIndData = (name) => {
//   return api.get(
//     `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags,symbol`
//   );
// };


import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

// HTTP GET METHOD for all countries
export const getCountryData = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};

// HTTP GET METHOD for an individual country
export const getCountryIndData = async (name) => {
  try {
    const response = await api.get(
      `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
    );
    return response;
  } catch (error) {
    console.error("Error fetching country data:", error);
    return { error };
  }
};
