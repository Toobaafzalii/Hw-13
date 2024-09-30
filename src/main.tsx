import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FormContainer from "./components/FormContainer.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormContainer/>
  </StrictMode>,
)
