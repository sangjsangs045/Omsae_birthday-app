import { useState } from 'react'
import Home from './pages/Home'
import Friend from './pages/Friend'
import Letter from './pages/Letter'
import Photo from './pages/Photo'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="app-container">
      <div className="page-content">
        {currentPage === 'home'   && <Home   onNavigate={setCurrentPage} />}
        {currentPage === 'friend' && <Friend onNavigate={setCurrentPage} />}
        {currentPage === 'letter' && <Letter onNavigate={setCurrentPage} />}
        {currentPage === 'photo'  && <Photo  onNavigate={setCurrentPage} />}
      </div>
    </div>
  )
}

export default App
