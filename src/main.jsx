import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Bgchanger from './component/Bgchanger.jsx'
import PasswordGenerator from './component/PasswordGenerator.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Bgchanger/> */}
    <PasswordGenerator />
  </React.StrictMode>,
)
