import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    if (ingredients.split(",").length < 2) {
      setError("Please enter at least two ingredients, separated by commas.");
      return;
    }

    // Successful submission
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(","),
      instructions: steps.split("."),
    };

    console.log("New Recipe Submitted:", newRecipe);
    setError("");
    setTitle("");
    setIngredients("");
    setSteps("");
    alert("Recipe submitted successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add a New Recipe</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Input */}
        <div>
          <label className="block text-gray-700 font-semibold">Recipe Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter recipe title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Ingredients Input */}
        <div>
          <label className="block text-gray-700 font-semibold">Ingredients (comma-separated)</label>
          <textarea
            className="w-full p-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Example: flour, sugar, eggs, milk"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>

        {/* Preparation Steps Input */}
        <div>
          <label className="block text-gray-700 font-semibold">Preparation Steps (each step ends with a period)</label>
          <textarea
            className="w-full p-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Example: Mix the ingredients. Bake at 180°C for 20 minutes."
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
