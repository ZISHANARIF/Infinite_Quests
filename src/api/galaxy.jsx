import React from 'react'
import axios from "axios";

const api = axios.create({
    baseURL: "https://api.nasa.gov/neo/rest/v1",
  });

export const getGalaxy = () => {
  return api.get("/feed?start_date=estimated_diameter_min,estimated_diameter_max,miss_distance,orbiting_body");
};