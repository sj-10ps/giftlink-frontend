import React from 'react'
import Userlayout from '../layouts/Userlayout'
import LoginForm from '../components/LoginForm'

const LoginPage = () => {
  return (
    <Userlayout>
      <div className='mt-10 flex justify-center'>
        <LoginForm/>
      </div>
    </Userlayout>
  )
}

export default LoginPage