import { NavLink } from "../navLink/navLink";
import styles from "./NavBar.module.css";

export const NavBar = () => {
 return ( 
  <nav className={styles.mobileNav}>
   <ul>
    <NavLink /> 
   </ul>
  </nav>
 );
};

export const TabletNavBar = ()=> {
 return (
  <nav>
   <ul className={styles.ul}>
    <NavLink />
   </ul>
  </nav>
 );
};