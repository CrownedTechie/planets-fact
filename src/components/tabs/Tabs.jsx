import styles from "./Tabs.module.css";


export const Tabs = () => {
 return ( 
  <>
   <li>
    <p className={`${styles.p}`}>overview</p>
   </li>

   <li>
    <p>structure</p>
   </li>

   <li>
    <p>surface</p>
   </li>
  </>
 );
}