import React from 'react'
import Userlayout from '../layouts/Userlayout'
import Registerform from '../components/Registerform'

const RegisterPage = () => {
  return (
   <Userlayout>
    <div className='mt-5 flex justify-center'>
       <Registerform/>
    </div>
   </Userlayout>
  )
}

export default RegisterPage