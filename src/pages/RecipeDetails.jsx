import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const RecipeDetails = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const [recipe, setRecipe] = useState(null)
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {

    const fetchRecipe = async () => {

      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      )

      const data = await res.json()

      setRecipe(data.meals[0])

    }

    fetchRecipe()

  }, [id])

  if (!recipe) return <h2 className="text-8xl">Loading...</h2>

  /* SAFER VIDEO ID EXTRACTION */
  const videoId = recipe.strYoutube
    ? recipe.strYoutube.split("v=")[1]?.split("&")[0]
    : null

  /* INGREDIENT EXTRACTION */
  const ingredients = []

  for (let i = 1; i <= 20; i++) {

    const ingredient = recipe[`strIngredient${i}`]
    const measure = recipe[`strMeasure${i}`]

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure} ${ingredient}`)
    }

  }

  /* INSTRUCTION SPLIT */
  const steps = recipe.strInstructions.split(". ")

  return (

    <div className="recipe-page">

      <header>
        <h1 className="recipe-title">{recipe.strMeal}</h1>
        <button onClick={() => navigate(-1)} className="close-btn">✕</button>
      </header>

      {/* VIDEO SECTION */}
      <div className="video-section">

        <div
          className="video-thumbnail"
          onClick={() => {
            if (videoId) {
              setShowVideo(true)
            } else {
              alert("No video tutorial available for this recipe")
            }
          }}
        >

          <img
            src={
              videoId
                ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                : recipe.strMealThumb
            }
            alt="Recipe tutorial"
            onError={(e) => {
              e.target.src = recipe.strMealThumb
            }}
          />

          <div className="watch-overlay">
            <span>
              {videoId ? "▶ Watch Recipe" : "No Video Available"}
            </span>
          </div>

        </div>

        {/* VIDEO MODAL */}
        {showVideo && videoId && (

          <div className="video-modal">

            <div className="video-container">

              <button
                className="close-video"
                onClick={() => setShowVideo(false)}
              >
                ✕
              </button>

              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Recipe video"
                allowFullScreen
              ></iframe>

            </div>

          </div>

        )}

      </div>

      {/* RECIPE CONTENT */}
      <div className="recipe-content">

        {/* INGREDIENTS */}
        <div className="ingredients">

          <h2>Ingredients</h2>

          <ol>
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>

        </div>

        {/* INSTRUCTIONS */}
        <div className="instructions">

          <h2>Instructions</h2>

          <div className="instruction-text">
            {steps.map((step, index) => (
              <p key={index}>{step}</p>
            ))}
          </div>

        </div>

      </div>

    </div>

  )
}

export default RecipeDetails