import { useContext } from "react"
import { recipeContext } from "../context/RecipeContext"
import { useNavigate } from "react-router-dom"

const Recipe = () => {

  const { data } = useContext(recipeContext)
  const navigate = useNavigate()

  const renderedRecipes = data.map((recipe) => (

   <div 
  key={recipe.id} 
  className="recipe-cards"
  onClick={() => navigate(`/recipes/${recipe.id}`)}
>
  <div className="recipe-card-inners">

    <img 
      src={recipe.image || "/default-recipe.jpg"} 
      alt={recipe.title} 
    />

    <div className="recipe-overlays">
      <button className="recipe-btns">View Recipe →</button>
    </div>

    <h3>{recipe.title}</h3>

  </div>
</div>
  ))

  return (
    <>
      <h1 className="recipe-title">Your Personalized Recipes</h1>
    <div className="recipes-container">
      {data.length > 0 ? renderedRecipes : (
        <img src="/no-recipe.png" alt="No recipes" className="empty-img"/>
      )}
    </div>
    </>
  )
}

export default Recipe