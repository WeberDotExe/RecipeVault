import React from 'react'
import { Link } from 'react-router-dom'

const Section1 = () => {
  return (
  <section className='section  '>
    <div className="section1">
        <h1>Discover, Create, and Organize Your <span>Favorite Recipes</span> </h1>
        <p>RecipeVault is your personal kitchen companion. 
           Save your favorite recipes, create new ones, and keep everything organized in one place. 
           From quick meals to special dishes, build your own recipe collection effortlessly.
        </p>
        <button className="browse-btn">
        <Link to="/recipes">Browse Recipes</Link>
        </button>
        </div>
    <figure>
        <img  src='section1img.png' alt="Recipe Image" />
    </figure>
  </section>
  )
}

export default Section1