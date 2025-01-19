import { useState } from "react";
import { Header, MobileNavBar } from "./components";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <Header handleClick={handleClick} />
      {isClicked && <MobileNavBar />}
    </>
  )
}

export default App;
