import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Tabs } from "../tabs/Tabs";
import styles from "./Content.module.css";
import sourceIcon from "../../assets/icon-source.svg";
import { Article } from "../article/Article";
import { useParams, useSearchParams } from "react-router-dom";
import { PlanetContext } from "../../context/planetContext";
import { motion, useReducedMotion } from "framer-motion";

export const Content =() => {
  const { planetName } = useParams();
  const { planetData } = useContext(PlanetContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get("tab") || "overview";

  const selectedPlanet = 
    planetData.find(planet => planet.name.toLowerCase() === planetName.toLowerCase()) ||
    planetData.find(planet => planet.name.toLowerCase() === "earth");
  if (!selectedPlanet) return <p>Planet not found</p>;

  const transition = {
    duration: 0.8,
    delay: 0.2,
  };

  const prefersReducedMotion = useReducedMotion()

 return ( 
  <motion.div
    initial={prefersReducedMotion ? false : { x: "20%", opacity: 0 }}
    animate={prefersReducedMotion ? {} : { x: 0, opacity: 1 }}
    exit={prefersReducedMotion ? {} : { x: "-20%", opacity: 0, transition: { duration: 0.2 } }}
    transition={prefersReducedMotion ? {} : transition}
    className={styles.contentDiv}
  >
      <nav className={styles.nav}>
        <ul className={`${styles.ul} text-medium`}> 
          <Tabs 
            planetColor={selectedPlanet.activeColor}
            searchParams={searchParams} 
            setSearchParams={setSearchParams}
            activeTab={activeTab}
          />
        </ul>
      </nav>

      <figure className={styles.figure}>
        <img 
          src={
            activeTab === "structure"
              ? selectedPlanet.images.internal
              : activeTab === "geology"
                ? selectedPlanet.images.geology
                : selectedPlanet.images.planet
          } 
            
          alt={selectedPlanet.name}
        />
      </figure>

      <div className={styles.planetDetailDiv}>
        {/* CONTENT OF THE PLANET GOES HERE */}
        <h2 className={`${styles.h2} text-l`}>{selectedPlanet.name}</h2>
        <p className={`${styles.p} text-small`}>{selectedPlanet[activeTab].content}</p>

        <p className={styles.source}>
          <span>Source :</span>
          <a 
            href={selectedPlanet[activeTab].source}
            target="_blank" 
            rel="noopener noreferrer" 
          >
              <span>Wikipedia</span>
              <img src={sourceIcon} alt="" />
          </a>
        </p>
      </div>

      <div className={styles.articleDiv}>
        <Article 
          rotation={selectedPlanet.rotation}
          revolution={selectedPlanet.revolution}
          radius={selectedPlanet.radius}
          temperature={selectedPlanet.temperature}
        />
      </div>
  </motion.div>
 );
};