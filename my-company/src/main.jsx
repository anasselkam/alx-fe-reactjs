import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home'
import Contact from './components/Contact'
import Services from './components/Services'
import About from './components/About'
import Navbar from './components/Navbar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
