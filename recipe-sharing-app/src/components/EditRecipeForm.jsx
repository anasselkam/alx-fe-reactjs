import React, { useState } from 'react'
import { useRecipeStore } from './recipeStore'

const EditRecipeForm = ({recipe}) => {
    const updateRecipe =useRecipeStore(state=>state.updateRecipe);
    const [title,setTitle]=useState(recipe.title);
    const [description,setdescription]=useState(recipe.description);

    const handleSubmit=(event)=>{
        event.preventDefault();
        updateRecipe(recipe.id, {title,description})
        setTitle("")
        setdescription("")

    }

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      placeholder='Title'
      />
      <textarea 
      value={description}
      onChange={(e)=>setdescription(e.target.value)}
      placeholder='description'
      />
      <button type='submit'>Update Recipe</button>
    </form>
  )
}

export default EditRecipeForm
