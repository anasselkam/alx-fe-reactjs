import { useNavigate } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'



const DeleteRecipeButton = ({recipeId }) => {
    const navigate = useNavigate()
    const deleteBtn = useRecipeStore(state=>state.deleteRecipe)
    const handleSubmit=()=>{
        deleteBtn(recipeId)
        navigate("/")
    }
  return (
    <button onClick={handleSubmit}>
      Delete
    </button>
  )
}

export default DeleteRecipeButton
