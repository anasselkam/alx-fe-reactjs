import React, { useState } from 'react'


const RegistrationForm = () => {
  const [username,setUsername]= useState("")
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const [errors,setErrors]= useState("")

  const handleSubmit =(e)=>{
        e.preventDefault()
        
        console.log("submit", {username,email,password})
        if (!username){
            setErrors("username is required")
        }
        if (!email){
            setErrors("Email is required")
        }
        if (!password){
            setErrors("try again")
            }
        setErrors("")
        setUsername("")
        setEmail("")
        setPassword("")
        

  }

    return (
        

            <form onSubmit={handleSubmit} >
                <label htmlFor="username">Username</label>
                <input type="text" name='username' required value={username} onChange={(e)=>setUsername(e.target.value)} />
                

                <label htmlFor="email">email</label>
                <input type="email" name='email' required value={email} onChange={(e)=>setEmail(e.target.value)} />
                

                <label htmlFor="password">Password</label>
                <input type="password" name='password' required value={password} onChange={(e)=>setPassword(e.target.value)} />
                
                {errors && <div style={{color:"red"}}>{errors}</div>}

                <button type='submit'>sign in</button>
            </form>

        
    )
}

export default RegistrationForm
