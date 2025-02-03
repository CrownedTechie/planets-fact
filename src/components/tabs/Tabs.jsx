import styles from "./Tabs.module.css";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const tabs = ["overview", "structure", "geology"];

export const Tabs = ({activeTab, setActiveTab, planetColor}) => {
  const isLargeScreen = useMediaQuery("(min-width: 601px)");

 return ( 
  <>
    {tabs.map((tab, index) => (
      <li
        key={tab} 
        className={`${styles.li} ${activeTab === tab ? styles.active : styles.onHover}`} 
        onClick={() => setActiveTab(tab)}
        style={{"--activeColor": planetColor}}
      >
        <p className={`${styles.p}`}>
          {isLargeScreen && <span className={styles.span}>0{index + 1}</span>}
          {isLargeScreen 
            ? tab === "structure" 
              ? "internal structure"
              : tab === "geology"
                ? "surface geology"
                : "overview"
            : tab
          }
        </p>
      </li>
    ))}
  </>
 );
}