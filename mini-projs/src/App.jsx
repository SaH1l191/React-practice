import { useEffect, useState } from 'react'
import './App.css'
import PasswordGenerator from './components/PasswordGenerator'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import Currencyconverter from './components/Currencyconverter'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import ColorPage from './components/colorPage'
import ProgressBar from './components/ProgressBar'
import SearchBar from './components/SearchBar'
function App() {







  return (
    <Layout>
      <div className='flex flex-col items-center min-h-screen '>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/password-generator' element={<PasswordGenerator />} />
          <Route path='/currency-converter' element={<Currencyconverter />} />
          <Route path='/colorPage' element={<ColorPage />} />
          <Route path='/progressBar' element={<ProgressBar />} />
          <Route path='/searchBar' element={<SearchBar />} />
        </Routes>
      </div>
    </Layout>
  )
}

export default App
