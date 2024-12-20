import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.tsx'
import Photos from './Stpeters_components/Photos.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Photos/>
  </StrictMode>,
)