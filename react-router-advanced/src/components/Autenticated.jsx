import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Autenticated = () => {

    const navigate = useNavigate()
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const [errors,setErrors]= useState("")

  const handleSubmit =(e)=>{
        e.preventDefault()
        
       
        if (email === "akram@gmail.com" && password === "akram1216"){
            localStorage.setItem("isAutenticated", "true");
            navigate("/profile")
        }else{
            return setErrors("wrong email or password")
        }
        
        setErrors("")
        setEmail("")
        setPassword("")
        

  }
  

    return (
        

            <form onSubmit={handleSubmit} >
                <label htmlFor="email">email</label>
                <input type="email" name='email' required value={email} onChange={(e)=>setEmail(e.target.value)} />
                

                <label htmlFor="password">Password</label>
                <input type="password" name='password' required value={password} onChange={(e)=>setPassword(e.target.value)} />
                
                {errors && <div style={{color:"red"}}>{errors}</div>}

                <button type='submit'>sign in</button>
                
            </form>

        
    )
}

export default Autenticated
