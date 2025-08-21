import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'

// import "..src/components/home.css"
import App from './App.jsx'

import Home from './components/Home.jsx'
import PlayerUI from './components/PlayerUI.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <DragonPlayer/> */}
    <Home/>
    {/* <PlayerUI/> */}
  </StrictMode>,
)
