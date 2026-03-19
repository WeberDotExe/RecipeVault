import { nanoid } from 'nanoid'
import  { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { recipeContext } from '../context/RecipeContext'
import { toast } from 'react-toastify'


const CreateRecipe = () => {
    const { data, setdata } = useContext(recipeContext)
const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const SubmitHandler = (recipe) => {
        recipe.id = nanoid()
        setdata([...data, recipe])
        toast.success("Recipe created successfully 🍳")
        reset() 
    }
 return (
  <div className='recipe-form'>

    <h1>Create Recipe 🍳</h1>

    <form onSubmit={handleSubmit(SubmitHandler)}>

      <div className="form-group">
        <label>Image URL</label>
       <input 
          type="url" 
          {...register("image", {
            required: "Image URL is required",
            pattern: {
              // value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|webp|gif))/i,
              message: "Enter a valid image URL"
            }
          })} 
           placeholder="Image URL"
          />
<small>{errors.image?.message}</small>

      </div>

      <div className="form-group">
        <label>Recipe Title</label>
        <input 
          type="text" 
          {...register("title", {
            required: "Title is required",
            minLength: {
              value: 3,
              message: "Title must be at least 3 characters"
            }
          })} 
          placeholder="Recipe Title"
        />
<small>{errors.title?.message}</small>

      </div>

      <div className="form-group">
        <label>Ingredients</label>
                <textarea 
          {...register("ingredients", {
            required: "Ingredients are required",
            minLength: {
              value: 10,
              message: "Add more details (at least 10 characters)"
            }
          })} 
          placeholder="Ingredients (comma separated)"
        />

        <small>{errors.ingredients?.message}</small>
      </div>

      <div className="form-group">
        <label>Instructions</label>
                <textarea 
          {...register("instructions", {
            required: "Instructions are required",
            minLength: {
              value: 15,
              message: "Instructions are too short"
            }
          })} 
          placeholder="Instructions"
        />

        <small>{errors.instructions?.message}</small>
      </div>

      <div className="form-group">
        <label>Category</label>
              <select 
          {...register("category", {
            required: "Please select a category"
          })}
        >
          <option value="">Select Category</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
        </select>

        <small>{errors.category?.message}</small>
      </div>

      <button type='submit'>Save Recipe</button>

    </form>  

  </div>
)
}

export default CreateRecipe