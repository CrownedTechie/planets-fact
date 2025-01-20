import { useState } from "react";
import hamburgerIcon from "../../assets/icon-hamburger.svg";
import { NavBar } from "../navBar/NavBar";
import styles from "./Header.module.css";
import { useMediaQuery } from "../../hooks/useMediaQuery";


export const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isLargeScreen = useMediaQuery("(min-width: 601px)");

  const handleClick = () => {
   setIsClicked(!isClicked);
  };
 
 return (
  <>
   <header className={styles.header}>
    <h1 className={`${styles.h1} text-xl`}>the planets</h1>
    <img src={hamburgerIcon} alt="Hamburger menu" className={styles.hamburger} onClick={handleClick} />
    {isLargeScreen && <NavBar />}
   </header>
   <hr className={styles.hr}/>
   {isSmallScreen && isClicked && <NavBar />}
  </> 
 );
};