import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Restore the real path after the GitHub Pages 404.html redirect trick.
const redirectPath = sessionStorage.getItem('redirectPath')
if (redirectPath) {
  sessionStorage.removeItem('redirectPath')
  window.history.replaceState(null, '', redirectPath)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
