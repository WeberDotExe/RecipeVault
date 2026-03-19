import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="nav ">
         <h1 className="nav-logo"><Link to="/">🍲Recipe<span>Vault</span></Link></h1>
      <div className="nav-links ">
        <NavLink className="nav-link"  to="/">Home</NavLink>
        <NavLink className="nav-link"  to="/about">About</NavLink>
        <NavLink className="nav-link"  to="/recipes">Recipe</NavLink>
        <NavLink className="nav-link"  to="/createRecipes">Create</NavLink>
      </div>

        <button 
        className="burger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

       {menuOpen && (
        <div className="mobile-menu">
          <NavLink className="nav-link" onClick={()=>setMenuOpen(false)} to="/">Home</NavLink>
          <NavLink className="nav-link" onClick={()=>setMenuOpen(false)} to="/about">About</NavLink>
          <NavLink className="nav-link" onClick={()=>setMenuOpen(false)} to="/recipes">Recipe</NavLink>
          <NavLink className="nav-link" onClick={()=>setMenuOpen(false)} to="/createRecipes">Create</NavLink>
        </div>
      )}

    </div>
  )
}

export default Navbar