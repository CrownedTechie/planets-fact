import { createContext, useEffect, useState } from "react";
import { data } from "../data";

//* So I created this context to store the planets data from the json file in a global state instead of me importing the data in every component that needs it

const PlanetContext = createContext([]);

const PlanetProvider = ({children}) => {
 const [planetData, setPlanetData] = useState([]);

 useEffect(() => {
  setPlanetData(data);
 }, []);
 
 return (
  <PlanetContext.Provider value={{ planetData, setPlanetData}}>
   {children}
  </PlanetContext.Provider>
 )
};

export { PlanetContext, PlanetProvider };