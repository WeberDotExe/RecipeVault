import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import RecipeContext from './context/RecipeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecipeContext>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </RecipeContext>
  </StrictMode>,
)
