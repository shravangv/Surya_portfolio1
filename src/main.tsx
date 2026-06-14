import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Wrapping App with the base subfolder configuration to fix the router warning */}
    <BrowserRouter basename="/Surya_portfolio1/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)