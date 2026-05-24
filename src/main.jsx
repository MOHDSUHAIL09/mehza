import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Local Variable Fonts (All weights included)
import "@fontsource-variable/inter";
import "@fontsource-variable/manrope";
import "@fontsource-variable/sora";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource-variable/material-symbols-outlined";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
