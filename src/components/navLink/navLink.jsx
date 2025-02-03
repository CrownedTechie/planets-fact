import React, { useContext } from "react";
import arrowRightIcon from "../../assets/icon-chevron.svg";
import styles from "./navLink.module.css";
import { PlanetContext } from "../../context/planetContext";
import { Link } from "react-router-dom";


export const NavLink = () => {
const { planetData } = useContext(PlanetContext);

 return ( 
  <>
   {planetData?.map((planet) => (
    <React.Fragment key={planet.name}>
     <Link  
      className={styles.li} 
      style={{"--hoverColor": planet.activeColor}} 
      tabIndex="0"
      to={`planets/${planet.name.toLowerCase()}`}
     >
      <div className={styles.div}>
       <div className={styles.roundedDiv} style={{backgroundColor: planet.color}}></div>
       <p className={`${styles.p} text-medium`}>{planet.name}</p>
      </div>
      
      <img src={arrowRightIcon} alt="arrow right icon" className={styles.arrowRightIcon} />
     </Link>
     <hr className={styles.hr} />
    </React.Fragment>
   ))}
  </>
 );
}