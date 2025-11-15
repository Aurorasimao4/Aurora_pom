import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <App />
    <h1>Hello, Aurora! (do ficheiro APP)</h1>
  </StrictMode>
)
