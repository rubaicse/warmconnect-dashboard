import me from './assets/me.jpg'
import { useState } from 'react'
import { Routes, Route, NavLink, useLocation } from 'react-router-dom'
import Profile from './pages/Profile.jsx'
import MyArticles from './pages/MyArticles.jsx'
import { Person, FileEarmarkText } from 'react-bootstrap-icons'

export default function App() {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()

  return (
    <div className={`layout ${collapsed ? 'collapsed' : ''}`}>
      {/* Sidebar */}
      <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <div className="d-flex flex-column align-items-center">
          <img className="avatar" src={me} alt="Your Name" />
          <div className="name">Rubai Raihan</div>
          <a className="email" href="mailto:rushnal.cse.20230104143@aust.edu">rushnal.cse.20230104143@aust.edu</a>

        </div>

        <div className="mt-4">
          <div className="menu-label mb-2">Menu</div>
          <NavLink to="/profile" className={({isActive}) => `navlink ${isActive ? 'active': ''}`}>
            <Person/> <span>Profile</span>
          </NavLink>
          <NavLink to="/articles" className={({isActive}) => `navlink ${isActive ? 'active': ''}`}>
            <FileEarmarkText/> <span>My Articles</span>
          </NavLink>
        </div>
      </aside>

      {/* Main content */}
      <div>
        <header className="header">
          <h1 className="title">
            {location.pathname.startsWith('/articles') ? 'My Articles' : 'Profile'}
          </h1>
          <button className="btn-toggle" onClick={() => setCollapsed(s => !s)}>
            {collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          </button>
        </header>

        <main className="content">
          <Routes>
            <Route path="/" element={<Profile/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/articles" element={<MyArticles/>} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
