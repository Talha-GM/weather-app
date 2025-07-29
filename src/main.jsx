import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { WeatherProvider } from './context/WeatherContext.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </BrowserRouter>
  // </StrictMode>,
)
