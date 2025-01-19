import { NavLink } from "../navLink/navLink";
import styles from "./NavBar.module.css";

export const MobileNavBar = () => {
 return ( 
  <nav className={styles.mobileNav}>
   <ul className={styles.ul}>
    <NavLink /> 
   </ul>
  </nav>
 );
};