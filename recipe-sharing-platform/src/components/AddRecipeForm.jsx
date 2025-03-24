import React, { useState } from 'react'

const AddRecipeForm = () => {
    const [title, setTitle] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [steps, setSteps] = useState("")
    const [errors, setErrors] = useState({})
const validate =()=>{
    const newErrors ={};
    if(!title) newErrors.title="title is required"
    if(!ingredients) newErrors.ingredients="ingredients are required"
    if(!steps) newErrors.steps="steps are required"
    const ingredientList = ingredients.split(",").map(item => item.trim())
        if (ingredientList.length < 2) 
            newErrors.ingredients="Please include at least 2 ingredients"
            setErrors(newErrors)
            return Object.keys(newErrors).length === 0
        
}

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return
        setTitle("")
        setIngredients("")
        setSteps("")
        setErrors("")
        }
        

    return (
        <div className='max-w-lg mx-auto p-5 bg-gray-50 shadow-md rounded-lg mt-8'>
            <h2 className='text-2xl font-bold mb-4 text-center'>Add new Recipe</h2>
            {errors && <p className='text-red-500 text-center'>{errors}</p>}

            <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                    <label htmlFor="title" className='block font-medium mb-1'>Recipe Title</label>
                    <input type="text"
                        name='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                    />
                </div>


                <div>
                    <label
                        className='block font-medium mb-1'
                        htmlFor="ingredient">Ingredients (comma separated)
                    </label>
                    <textarea
                        name="ingredient"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                    >

                    </textarea>

                </div>
                <div>
                    <label
                        className='block font-medium mb-1'
                        htmlFor="steps">Instructions
                    </label>
                    <textarea
                        name="steps"
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                    >

                    </textarea>

                </div>

                <button
                    type='submit'
                    className='w-full bg-gray-300 text-black p-3 rounded-md hover:bg-gray-400 transition'
                >
                    Add Recipe
                </button>


            </form>

        </div>
    )
}

export default AddRecipeForm
