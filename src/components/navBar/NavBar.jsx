import { NavLink } from "../navLink/navLink";
import styles from "./NavBar.module.css";

export const NavBar = () => {
 return ( 
  <nav className={styles.nav}>
   <ul className={styles.ul}>
    <NavLink /> 
   </ul>
  </nav>
 );
};