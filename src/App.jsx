import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Content, Header } from "./components";
import backgroundStars from "./assets/background-stars.svg";
import { planetEnum } from "./data";

const bodyStyle = {
  backgroundImage: `url(${backgroundStars})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed'
};

function App() {
  const location = useLocation();

  const path = location.pathname;
  const uniquePathSplit = path?.split?.("/")??[];
  const uniquePathLength = uniquePathSplit?.length
  const uniquePath = uniquePathSplit[uniquePathLength-1]
  const activePathIndex = planetEnum[uniquePath]
  const isEven = activePathIndex % 2 ===0
  

  return (
    <>
      <Header />

      <main style={bodyStyle} >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigate to="/planets/earth" replace/>} />
            <Route path="/planets/:planetName" element={<Content />} />
          </Routes>
      </main>
    </>
  )
}

export default App;
