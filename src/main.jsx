import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyles } from './styles/GlobalStyles'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyles/>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </>,
)
