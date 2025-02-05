import styles from "./Tabs.module.css";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useEffect } from "react";

const tabs = ["overview", "structure", "geology"];

export const Tabs = ({planetColor, searchParams, setSearchParams, activeTab}) => {
  const isLargeScreen = useMediaQuery("(min-width: 601px)");

  useEffect(() => {
    if (!searchParams.get("tab")) {
      setSearchParams({ tab: "overview" }, { replace: true }); 
    }
  }, [searchParams, setSearchParams]);

  const handleClick = (newTab) => {
     if (newTab !== activeTab) {
      setSearchParams({ tab: newTab });
    }
  };

 return ( 
  <>
    {tabs.map((tab, index) => (
      <li
        key={tab} 
        className={`${styles.li} ${activeTab === tab ? styles.active : styles.onHover}`} 
        onClick={() => handleClick(tab)}
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