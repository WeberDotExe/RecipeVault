import { createContext,useState } from "react"
import { useEffect } from "react"

export const recipeContext = createContext(null)

const RecipeContext = (props) => {
   const [data, setdata] = useState(() => {
  const storedData = localStorage.getItem("recipes")
  return storedData ? JSON.parse(storedData) : []
})

useEffect(() => {
  localStorage.setItem("recipes", JSON.stringify(data))
}, [data])
    console.log(data)
  return (
    <recipeContext.Provider value={{data, setdata}}>
        {props.children}
    </recipeContext.Provider>
  )
}

export default RecipeContext