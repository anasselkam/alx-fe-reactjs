import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";



function App() {


  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<AddRecipeForm />} />
        <Route path="list/" element={<RecipeList />} />
        <Route path="details/" element={<RecipeDetails />} >
          <Route path=":recipeId" element={<RecipeDetails />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
