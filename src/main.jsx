import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// NOTE: App is imported and used like it's own HTML Tag <App />
// This is because React is a library that allows you to create components that can be used like HTML tags
// Components can be reusable in your code or a friends code !
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
