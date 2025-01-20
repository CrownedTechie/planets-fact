import React, { useContext } from "react";
import arrowRightIcon from "../../assets/icon-chevron.svg";
import styles from "./navLink.module.css";
import { PlanetContext } from "../../context/planetContext";


export const NavLink = () => {
const { planetData } = useContext(PlanetContext);

 return ( 
  <>
   {planetData?.map((item) => (
    <React.Fragment key={item.name} className={styles.fragment}>
     <li className={styles.li} style={{"--hoverColor": item.colour}}>
      <div className={styles.div}>
       <div className={styles.roundedDiv} style={{backgroundColor: item.colour}}></div>
       <p className={`${styles.p} text-medium`}>{item.name}</p>
      </div>
      
      <img src={arrowRightIcon} alt="arrow right icon" className={styles.arrowRightIcon} />
     </li>
     <hr className={styles.hr} />
    </React.Fragment>
   ))}
  </>
 );
}