import React, { useState } from 'react'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)

  
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        console.log("Success!");
      } else {
        console.log("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  const viewLogin = (status) =>{
    setIsLogin(status)
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type='text' 
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            />
            <input 
            type='password' 
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            />
            {!isLogin && <input 
            type='password' 
            placeholder='Confirm Password'
            onChange={(e) => setConfirmPassword(e.target.value)}
            />}
            <button type='submit'>{isLogin ? 'Login' : 'Register'}</button>
        </form>
        <button onClick={() => viewLogin(false)}>Sign Up</button>
        <button onClick={ () => viewLogin(true)}>Login</button>
    </div>
  )
}

export default Login