import { useForm } from "react-hook-form"
import { useContext } from "react"
import { recipeContext } from "../context/RecipeContext"
import { toast } from "react-toastify"

const EditModal = ({ recipe, setShowEdit }) => {

  const { data, setdata } = useContext(recipeContext)

  const { register, handleSubmit } = useForm({
    defaultValues: recipe
  })

  const onSubmit = (updatedRecipe) => {

    const updatedData = data.map(r => 
      r.id === recipe.id ? { ...updatedRecipe, id: recipe.id } : r
    )

    setdata(updatedData)
    toast.success("Recipe updated successfully ✨")
    setShowEdit(false)
  }

  return (
    <div className="video-modal">

      <div className="modal-form">

        <button 
          className="close-videos"
          onClick={() => setShowEdit(false)}
        >
          ✕
        </button>

        <form onSubmit={handleSubmit(onSubmit)}>

          <input {...register("image")} placeholder="Image URL" />
          <input {...register("title")} placeholder="Title" />
          <textarea {...register("ingredients")} placeholder="Ingredients" />
          <textarea {...register("instructions")} placeholder="Instructions" />

          <button className="update" type="submit">Update Recipe</button>

        </form>

      </div>

    </div>
  )
}

export default EditModal