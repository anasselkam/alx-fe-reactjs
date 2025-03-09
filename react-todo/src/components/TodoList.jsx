import React, { useState } from 'react'
import AddTodoForm from './AddTodoForm'

const TodoList = () => {

    const [todos,setTodo]=useState([{
      id: 1, text:"do the dishes", completed:false
    },{
      id: 2, text:"Workout", completed:false
    }
  ])
  const addTodo =(text)=>{
const newTodo={id:Date.now(), text, completed:false};
setTodo([...todos,newTodo])
  }

  const toggleTodo=(id)=>{
    setTodo((prevTodos)=>
      prevTodos.map(todo=>
        todo.id ===id ? {...todo, completed:!todo.completed} :todo
      )
      
    )
  }
  const deleteTodo=(id)=>{
    setTodo(todos.filter(todo=>todo.id !==id)
    )
  }

  return (
    <div>
      <h2>Todo List</h2>
      <AddTodoForm addTodo={addTodo} />
      <ul>
      
        {todos.map(todo=>(
          
          <li key={todo.id}
          onClick={()=>toggleTodo(todo.id)}
          style={{textDecoration:todo.completed ? "line-through" : "none" ,cursor:"pointer"}}
          >
            {todo.text}
            <button type='checkbox'  onClick={()=> toggleTodo(todos.id)}>Toggle</button>
            <button onClick={(e)=>{e.stopPropagation(),deleteTodo(todo.id)}}>Delete</button>

          </li>
        ))}


      </ul>


    </div>
  )
}

export default TodoList
