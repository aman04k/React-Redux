import { configureStore } from '@reduxjs/toolkit'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux'


const store = configureStore({   
  reducer: {
    //user
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
    <App />
    </Provider>

 
  </StrictMode>,
)
