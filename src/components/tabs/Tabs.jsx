import styles from "./Tabs.module.css";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export const Tabs = () => {
  const isLargeScreen = useMediaQuery("(min-width: 601px)");

 return ( 
  <>
   <li className={styles.li}>
    <p className={`${styles.p}`}> 
     {isLargeScreen && <span className={styles.span}>01</span>} 
     overview
    </p>
   </li>

   <li className={styles.li}>
    <p className={`${styles.p}`}>
     {isLargeScreen && <span className={styles.span}>02</span> } 
     structure
     </p>
   </li>

   <li className={styles.li}>
    <p className={`${styles.p}`}>
     {isLargeScreen && <span className={styles.span}>03</span>} 
     surface
    </p>
   </li>
  </>
 );
}