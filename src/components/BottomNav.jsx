import './BottomNav.css'

const tabs = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'friend', label: 'Friend', icon: '📸' },
  { id: 'letter', label: 'Letter', icon: '💌' },
]

export default function BottomNav({ currentPage, onNavigate }) {
  return (
    <nav className="bottom-nav">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`nav-btn ${currentPage === tab.id ? 'active' : ''}`}
          onClick={() => onNavigate(tab.id)}
        >
          <span className="nav-icon">{tab.icon}</span>
          <span className="nav-label">{tab.label}</span>
        </button>
      ))}
    </nav>
  )
}
