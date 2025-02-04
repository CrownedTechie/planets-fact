import { useState } from "react";
import hamburgerIcon from "../../assets/icon-hamburger.svg";
import { NavBar } from "../navBar/NavBar";
import styles from "./Header.module.css";
import { useMediaQuery } from "../../hooks/useMediaQuery";


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isLargeScreen = useMediaQuery("(min-width: 601px)");

  const handleToggleMenu = () => {
   setIsOpen(!isOpen);
  };
 
 return (
  <>
   <header className={styles.header} tabIndex="0" >
    <h1 className={`${styles.h1} text-xl`} tabIndex="0">the planets</h1>
    <img 
      src={hamburgerIcon} 
      alt="Hamburger menu" 
      className={styles.hamburger} 
      onClick={handleToggleMenu} 
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleToggleMenu();
        }
      }}
      tabIndex="0" 
      aria-expanded={isOpen}
      aria-label="toggle menu"
    />
    {isLargeScreen && <NavBar />}
   </header>
   <hr className={styles.hr}/>
   {isSmallScreen && isOpen && <NavBar setIsOpen={setIsOpen}/>}
  </> 
 );
};