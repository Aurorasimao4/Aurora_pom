import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import AuroraS from './App.tsx'

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <AuroraS />
    <h1>Hello, Aurora! (do ficheiro APP)</h1>
  </StrictMode>
)
