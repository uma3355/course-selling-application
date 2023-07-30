import React from 'react'
import "../styles/signup-card.css"
const SignupCard = () => {
  return (
     <form className='signup-form background'>
        <input type='text' placeholder='Enter your User name'></input>
        <input type='text' placeholder='Enter your Passsword'></input>
        <button >SignUp</button>
     </form>
  )
}

export default SignupCard