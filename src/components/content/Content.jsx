import React, { useContext, useState } from "react";
import { Tabs } from "../tabs/Tabs";
import styles from "./Content.module.css";
import earthPic from "../../assets/planet-earth.svg";
import sourceIcon from "../../assets/icon-source.svg";
import { Article } from "../article/Article";
import { useParams } from "react-router-dom";
import { PlanetContext } from "../../context/planetContext";

const tabs = ["overview", "structure", "geology"];

export const Content = () => {
  const { planetName } = useParams();
  const { planetData } = useContext(PlanetContext);
  const [ activeTab, setActiveTab ] = useState("overview");

  const selectedPlanet = 
    planetData.find(planet => planet.name.toLowerCase() === planetName.toLowerCase()) ||
    planetData.find(planet => planet.name.toLowerCase() === "earth");

  if (!selectedPlanet) return <p>Planet not found</p>;

 return ( 
  <div className={styles.contentDiv}>
    <nav className={styles.nav}>
      <ul className={`${styles.ul} text-medium`}> 
        <Tabs 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          planetColor={selectedPlanet.colour}
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
  </div>
 );
};