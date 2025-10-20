import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
    <BrowserRouter>  {/* 👈 2. Wrap your App component */}
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
