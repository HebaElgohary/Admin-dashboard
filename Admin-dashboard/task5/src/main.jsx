import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/style.module.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

import {MainLAyOut} from './layout/MainLAyOut.jsx'
import {SharedLayOut} from './layout/SharedLayOut.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainLAyOut />

  </StrictMode>,
)
