import React from 'react'
import { useRecipeStore } from './recipeStore'

const SearchBar = () => {
    const setSearchTerm = useRecipeStore(state => state.setSearchTerm)
    const filterRecipes =useRecipeStore(state=>state.filterRecipes)
    const handleKey= (e)=>{
        if (e.key ==="Enter") {
            filterRecipes()
        }
    }

    return (
        <input
            type='text'
            placeholder='Search recipes...'
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKey}
        />

    )
}

export default SearchBar
