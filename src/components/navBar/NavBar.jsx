import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { PlanetContext } from "../../context/planetContext";
import arrowRightIcon from "../../assets/icon-chevron.svg";

export const NavBar = ({setIsOpen}) => {
  const { planetData } = useContext(PlanetContext);

 return ( 
  <nav className={styles.nav}>
   <ul className={styles.ul}>
    {planetData?.map((planet) => (
     <React.Fragment key={planet.name}>
      <NavLink 
       className={({ isActive }) => `${styles.li} ${isActive ? styles.active : ""}`}
       style={{"--hoverColor": planet.activeColor}} 
       tabIndex="0"
       to={`planets/${planet.name.toLowerCase()}`}
       onClick={() => setIsOpen(false)}
      >
       <div className={styles.div}>
        <div className={styles.roundedDiv} style={{backgroundColor: planet.color}}></div>
        <p className={`${styles.p} text-medium`}>{planet.name}</p>
       </div>
       
       <img src={arrowRightIcon} alt="arrow right icon" className={styles.arrowRightIcon} />
      </NavLink>
      <hr className={styles.hr} />
     </React.Fragment>
    ))}
   </ul>
  </nav>
 );
};