import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import IP from '../utils/IP'
import { toast } from 'react-toastify'
import { useAuthContext } from '../contexts/AuthProvider'

const LoginForm = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {SignIn}=useAuthContext()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const res=await axios.post(`${IP}/login`,{email,password})
            console.log(res.data.data)
            SignIn(res.data.token,res.data.data)
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
    }
  return (
    <form className='px-8 w-full max-w-lg py-8 bg-white shadow-xl rounded-lg group flex flex-col gap-4 mx-2' onSubmit={handleSubmit}>
       <h2 className='text-2xl font-bold text-center'>Login</h2>
     
        <label htmlFor="email" className='capitalize font semibold'>email</label>
        <input type="text"  className='p-2 placeholder:text-slate outline rounded-lg focus:bg-amber-100' placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <label htmlFor="password" className='capitalize font semibold'>password</label>
        <input type="password"  className='p-2 placeholder:text-slate  outline rounded-lg focus:bg-amber-100' placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <input type="submit" value={'submit'} className='bg-blue-900 text-white capitalize  py-2 px-5 hover:opacity-80'/>
        <p className='flex gap-1'>New here? <Link to={'/registerpage'} className='text-blue-700 hover:opacity-80'>Register Here</Link></p>
     
    </form>
  )
}

export default LoginForm
