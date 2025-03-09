import { useRecipeStore } from './recipeStore';
import {useParams} from "react-router-dom"
import DeleteRecipeButton from './DeleteRecipeButton';
import EditRecipeForm from './EditRecipeForm';


const RecipeDetails = () => {
  const {recipeId} =useParams()
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.title === recipeId)
  );

  if (!recipe) {
    return <p>Nothing.</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe ={recipe}/>
      <DeleteRecipeButton recipeId={recipe.id} />
      
    </div>
  );
};

export default RecipeDetails