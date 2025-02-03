import React, { useContext } from "react";
// import { NavLink } from "../navLink/navLink";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { PlanetContext } from "../../context/planetContext";
import arrowRightIcon from "../../assets/icon-chevron.svg";


export const NavBar = () => {
 const { planetData } = useContext(PlanetContext);

 const handleClick = () => {
  Navigate('kskkdk');
  setIsOpen(false)
 };

 return ( 
  <nav className={styles.nav}>
   <ul className={styles.ul}>
    {/* <NavLink />  */}
    {planetData?.map((planet) => (
     <>
      <NavLink 
       key={planet.name}
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
      </NavLink>
      <hr className={styles.hr} />
     </>
    ))}
   </ul>
  </nav>
 );
};