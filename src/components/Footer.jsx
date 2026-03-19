import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">

  <div className="footer-container">

    {/* BRAND */}
    <div className="footer-brand">
      <h2>Recipe<span>Vault</span></h2>
      <p>
        Discover recipes from around the world and
        store your own personal recipes in one place.
      </p>
    </div>

    {/* NAVIGATION */}
    <div className="footer-links">
      <h3>Explore</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/createRecipes">Create Recipe</Link></li>
        <li><Link to="/recipes">My Recipes</Link></li>
      </ul>
    </div>

    {/* FEATURES */}
    <div className="footer-links">
      <h3>Features</h3>
      <ul>
        <li>Cuisine Discovery</li>
        <li>Video Tutorials</li>
        <li>Personal Recipe Collection</li>
      </ul>
    </div>

  </div>

  {/* COPYRIGHT */}
  <div className="footer-bottom">
    <p>© 2026 RecipeHub — Built with React</p>
  </div>

</footer>
  )
}

export default Footer