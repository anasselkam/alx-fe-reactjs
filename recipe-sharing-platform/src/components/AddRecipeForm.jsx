import { useState } from "react";

function AddRecipeForm({ onAddRecipe }) {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({});

  // Validate function to check required fields
  const validate = () => {
    let newErrors = {};
    if (!recipe.title.trim()) newErrors.title = "Title is required";
    if (!recipe.ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!recipe.steps.trim()) newErrors.steps = "Steps are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onAddRecipe(recipe);
      setRecipe({ title: "", ingredients: "", steps: "" });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-lg max-w-lg mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          value={recipe.title}
          onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Ingredients</label>
        <textarea
          value={recipe.ingredients}
          onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
        {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Steps</label>
        <textarea
          value={recipe.steps}
          onChange={(e) => setRecipe({ ...recipe, steps: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
        {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600">
        Add Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;


