import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './provider/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <BrowserRouter>
          <Router></Router>
        </BrowserRouter>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
