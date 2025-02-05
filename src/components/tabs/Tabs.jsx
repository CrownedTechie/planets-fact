import styles from "./Tabs.module.css";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useEffect } from "react";

const tabs = ["overview", "structure", "geology"];

export const Tabs = ({planetColor, searchParams, setSearchParams, activeTab}) => {
  const isLargeScreen = useMediaQuery("(min-width: 601px)");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (!tab) {
      setSearchParams({ tab: "overview" }, { replace: true });
    }
  }, [searchParams.get("tab"), setSearchParams]);


  const handleClick = (newTab) => {
     if (newTab !== activeTab) {
      setSearchParams({ tab: newTab }, { replace: true });
    }
  };

  const getTabLabel = (tab) => {
    if (!isLargeScreen) return tab;
    return tab === "structure" ? "internal structure" 
        : tab === "geology" ? "surface geology" 
        : "overview";
  };

 return ( 
  <>
    {tabs.map((tab, index) => (
      <li
        key={tab} 
        role="button"
        className={`${styles.li} ${activeTab === tab ? styles.active : styles.onHover}`} 
        onClick={() => handleClick(tab)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleClick(tab);
        }}
        style={{"--activeColor": planetColor}}
        tabIndex="0"
      >
        <p className={`${styles.p}`}>
          {isLargeScreen && <span className={styles.span}>0{index + 1}</span>}
          {getTabLabel(tab)}
        </p>
      </li>
    ))}
  </>
 );
}