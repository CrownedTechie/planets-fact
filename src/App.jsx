import { Navigate, Route, Routes } from "react-router-dom";
import { Content, Header } from "./components";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/planets/earth" replace />} />
          <Route path="/planets/:planetName" element={<Content />} />
        </Routes>
        {/* <Content /> */}
      </main>
    </>
  )
}

export default App;
