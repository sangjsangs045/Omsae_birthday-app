import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Friend from './pages/Friend'
import Letter from './pages/Letter'
import Photo from './pages/Photo'
import './App.css'

const DESIGN_W = 412
const DESIGN_H = 917

// 각 페이지의 주 배경 — 캔버스 바깥 여백에 동일하게 확장
const PAGE_BG = {
  home:   '#f4a7b9',
  friend: '#ffffff',
  letter: 'linear-gradient(180deg, rgba(75,206,235,0.35) 0%, rgba(229,121,209,0.35) 100%)',
  photo:  '#ffffff',
}

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const updateScale = () => {
      const scaleX = window.innerWidth  / DESIGN_W
      const scaleY = window.innerHeight / DESIGN_H
      setScale(Math.min(scaleX, scaleY))
    }
    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  return (
    <div className="app-viewport" style={{ background: PAGE_BG[currentPage] }}>
      <div className="app-canvas" style={{ transform: `scale(${scale})` }}>
        {currentPage === 'home'   && <Home   onNavigate={setCurrentPage} />}
        {currentPage === 'friend' && <Friend onNavigate={setCurrentPage} />}
        {currentPage === 'letter' && <Letter onNavigate={setCurrentPage} />}
        {currentPage === 'photo'  && <Photo  onNavigate={setCurrentPage} />}
      </div>
    </div>
  )
}

export default App
