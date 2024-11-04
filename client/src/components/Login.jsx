import React, { useState } from 'react'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)

  const response = await fetch (`${process.env.REACT_APP_SERVERURL}/signup`,{
    method: 'POST',
    headers: {'Content-type' : 'application/json'},
    body: JSON.stringify({email, password})
  })
  

  const viewLogin = (status) =>{
    setIsLogin(status)
  }

  return (
    <div>
        <form>
            <input type='text' placeholder='Email'></input>
            <input type='password' placeholder='Password'></input>
            {!isLogin && <input type='password' placeholder='Confirm Password'/>}
            <button>{isLogin ? 'Login' : 'Register'}</button>
        </form>
        <button onClick={() => viewLogin(false)}>Sign Up</button>
        <button onClick={ () => viewLogin(true)}>Login</button>
    </div>
  )
}

export default Login