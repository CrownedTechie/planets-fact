import styles from "./Tabs.module.css";


export const Tabs = () => {
 return ( 
  <>
   <li className={styles.li}>
    <p className={`${styles.p}`}>overview</p>
   </li>

   <li className={styles.li}>
    <p>structure</p>
   </li>

   <li className={styles.li}>
    <p>surface</p>
   </li>
  </>
 );
}