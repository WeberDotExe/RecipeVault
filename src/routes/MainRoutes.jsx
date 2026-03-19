import { Routes,Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Recipe from "../pages/Recipe"
import CreateRecipe from "../pages/CreateRecipe"
import CuisinePage from "../pages/CuisinePage"
import RecipeDetails from "../pages/RecipeDetails"
import RecipeDetail from "../pages/RecipeDetail"

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<CuisinePage />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/CreateRecipes" element={<CreateRecipe />} />
    </Routes>
  )
}

export default MainRoutes