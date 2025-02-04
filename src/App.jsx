import { Navigate, Route, Routes } from "react-router-dom";
import { Content, Header } from "./components";
import backgroundStars from "./assets/background-stars.svg";
import React from "react";

const bodyStyle = {
  backgroundImage: `url(${backgroundStars})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed'
};


function App() {
  return (
    <>
      <Header />

      <main style={bodyStyle} >
        <Routes>
          <Route path="/" element={<Navigate to="/planets/earth" replace />} />
          <Route path="/planets/:planetName" element={<Content />} />
        </Routes>
      </main>
    </>
  )
}

export default App;
