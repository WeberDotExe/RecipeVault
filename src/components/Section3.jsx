import React from 'react'
import { Link } from 'react-router-dom'

const Section3 = () => {
  return (

    <section className="create-section">

  <div className="create-image">
    <img src="/section2img.png" alt="Cooking food"/>
  </div>

  <div className="create-content">

    <h2>Share Your Own Recipe 🍳</h2>

    <p>
      Got a favorite dish or a recipe you love to make? 
      Save your own recipes inside the app and keep them organized in one place
      for whenever you want to cook again.
    </p>

    <button className="create-btn">
      <Link to="/CreateRecipes">Create Recipe</Link>
    </button>

  </div>

</section>
    
  )
}

export default Section3