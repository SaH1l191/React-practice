import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'
// import UserContextProvider from './context/UserContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <UserContextProvider>  1st way */} 
    <ThemeProvider>
      <App />
      {/* </UserContextProvider> */}
    </ThemeProvider>
  </BrowserRouter>


)
