import React from "react";
import { Tabs } from "../tabs/Tabs";
import styles from "./Content.module.css";
import earthPic from "../../assets/planet-earth.svg";
import sourceIcon from "../../assets/icon-source.svg";
import { Article } from "../article/Article";


export const Content = () => {
 return ( 
  <div className={styles.contentDiv}>
    <nav className={styles.nav}>
      <ul className={`${styles.ul} text-medium`}> 
        <Tabs />
      </ul>
    </nav>

    <figure className={styles.figure}>
      {/* PICTURE WILL GO HERE AND BE CHANGING DEPENDING ON THE TAB ABOVE SELECTED */}
      <img src={earthPic} alt="Earth" />
    </figure>

    <div className={styles.planetDetailDiv}>
      {/* CONTENT OF THE PLANET GOES HERE */}
      <h2 className={`${styles.h2} text-l`}>earth</h2>
      <p className={`${styles.p} text-small`}>Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.</p>

      <p className={styles.source}>
        <span>Source :</span>
        <a 
          href="" 
          target="_blank" 
          rel="noopener noreferrer" 
        >
            <span>Wikipedia</span>
            <img src={sourceIcon} alt="" />
        </a>
      </p>
    </div>

    <div className={styles.articleDiv}>
      <Article />
    </div>
  </div>
 );
};