import './TopNav.css'

const tabs = [
  { id: 'friend', label: 'Friend' },
  { id: 'letter', label: 'Letter' },
]

export default function TopNav({ currentPage, onNavigate }) {
  return (
    <nav className="top-nav">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`top-nav-btn ${currentPage === tab.id ? 'active' : ''}`}
          onClick={() => onNavigate(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  )
}
