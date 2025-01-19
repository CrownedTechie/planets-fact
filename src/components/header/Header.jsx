import hamburgerIcon from "../../assets/hamburger.svg";
import styles from "./Header.module.css";

export const Header = () => {
 return (
  <>
   <header className={styles.header}>
    <h1 className={`${styles.h1} text-xl`}>the planets</h1>
    <img src={hamburgerIcon} alt="Hamburger menu" className={styles.hamburger} />
   </header>
   <hr className={styles.hr}/>
  </> 
 );
};