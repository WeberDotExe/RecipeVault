import { useParams, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { recipeContext } from "../context/RecipeContext"
import EditModal from "../components/EditModal"
import { toast } from "react-toastify"

const RecipeDetail = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const { data, setdata } = useContext(recipeContext)

  const recipe = data.find(r => r.id === id)

  const [showEdit, setShowEdit] = useState(false)
  const [showDelete, setShowDelete] = useState(false)

  if (!recipe) return <h2>Recipe not found</h2>

  const ingredients = recipe.ingredients.split(",")
  const steps = recipe.instructions.split(".")

  const handleDelete = () => {
    const filtered = data.filter(r => r.id !== id)
    setdata(filtered)
    toast.success("Recipe deleted  🗑️")
    navigate(-1)
  }

  return (
    <div className="recipe-page">

      <header>
        <h1 className="recipe-title">{recipe.title}</h1>
        <button onClick={() => navigate(-1)} className="close-btn">✕</button>
      </header>

      {/* IMAGE */}
      {/* <div className="video-section">
        <img src={recipe.image} alt={recipe.title} />
      </div> */}

      {/* CONTENT */}
      <div className="recipe-content">

        <div className="ingredients">
          <h2>Ingredients</h2>
          <ol>
            {ingredients.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        </div>

        <div className="instructions">
          <h2>Instructions</h2>
          <div className="instruction-text">
            {steps.map((step, i) => (
              <p key={i}>{step}</p>
            ))}
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="actions">
          <button onClick={() => setShowEdit(true)} className="edit-btn">
            Edit
          </button>

          <button 
            onClick={() => setShowDelete(true)} 
            className="delete-btn"
          >
            Delete
          </button>
        </div>

      </div>

      {/* EDIT MODAL */}
      {showEdit && (
        <EditModal 
          recipe={recipe} 
          setShowEdit={setShowEdit} 
        />
      )}

      {showDelete && (
  <div className="video-modal">

    <div className="confirm-modal">

      <h2>Are you sure?</h2>
      <p>This recipe will be permanently deleted.</p>

      <div className="confirm-actions">
        <button 
          className="cancel-btn"
          onClick={() => setShowDelete(false)}
        >
          Cancel
        </button>

        <button 
          className="delete-btn"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>

    </div>

  </div>
)}

    </div>
  )
}

export default RecipeDetail