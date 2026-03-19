import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState,useEffect, use } from 'react'
import {useNavigate}  from 'react-router-dom'


const CuisinePage = () => {
    const { type } = useParams()
    const [recipe, setrecipe] = useState([])
    const Navigate = useNavigate()

    useEffect(() => {
        const fetchRecipe = async () => {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${type}`)
            const data = await res.json()
            setrecipe(data.meals)
        }
        fetchRecipe()
    }, [type])
  return (
    <div className='cuisine-page'>
       <header>
         <h1>Discover top <span>{type}</span> Dishes</h1>
         <button><Link to="/">close</Link></button>
       </header>

          <div className="recipe-wrapper">
           {recipe.map((meal) => (
            <div key={meal.idMeal} onClick={()=>Navigate(`/recipe/${meal.idMeal}`)} className="recipe-card">
             <div  className="recipe-card-inner">

                <img src={meal.strMealThumb} alt={meal.strMeal} />

                 <h3>{meal.strMeal}</h3>

                 <div className="recipe-overlay">
                  <button className="recipe-btn">View Recipe →</button>
                 </div>

              </div>
            </div>
        ))}
            </div>    

    </div>
  )
}

export default CuisinePage