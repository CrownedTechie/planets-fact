import React from "react";
import { NavBar } from "../navBar/NavBar";
import { Tabs } from "../tabs/Tabs";
import styles from "./Content.module.css";


export const Content = () => {
 return ( 
  <React.Fragment>
   <nav>
    <ul className={styles.ul}> 
      {/* TABS WILL GO HERE */}
      <Tabs />
    </ul>
   </nav>

   <figure>
    {/* PICTURE WILL GO HERE AND BE CHANGING DEPENDING ON THE TAB ABOVE SELECTED */}
   </figure>

   <div>
    {/* CONTENT OF THE PLANET GOES HERE */}
   </div>
  </React.Fragment>
 );
};