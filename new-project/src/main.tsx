import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './main.scss'
import { ThemeProvider } from './context/ThemeProvider/ThemeProvider.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> 
    <ThemeProvider>
        <App />
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
