import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import Home from './pages/Home/App.jsx'
import Propos from './pages/Propos/index.jsx'
import Error from './pages/Error/index.jsx'
import Nav from './components/Layout/index.jsx'
import Logement from './pages/Logements/index.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<Home />} />
          <Route path="/propos" element={<Propos />} />
          <Route path="*" element={<Error />} />
          <Route path="/logement" element={<Logement />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
