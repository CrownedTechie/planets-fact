import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PlanetProvider } from './context/planetContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PlanetProvider>
      <App />
    </PlanetProvider>
  </StrictMode>
)
