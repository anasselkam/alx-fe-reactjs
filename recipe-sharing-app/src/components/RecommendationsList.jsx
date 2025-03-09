import React from 'react'
import { useRecipeStore } from './recipeStore'

const RecommendationsList = () => {

    const recommendationsList = useRecipeStore(state=>state.recommendations)
  return (
    <div>
        <h2>Recommendations</h2>
        {recommendationsList.map(recipe=>(
            <div key={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>

            </div>
        ))}
      
    </div>
  )
}

export default RecommendationsList
