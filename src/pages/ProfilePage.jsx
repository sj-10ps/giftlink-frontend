import React, { useEffect, useState } from 'react'
import Userlayout from '../layouts/Userlayout'

import IP from '../utils/IP'
import api from '../utils/axiossetup'
import { FaSpinner } from 'react-icons/fa'
import { toast } from 'react-toastify'

const ProfilePage = () => {
  const [data,setData]=useState({})
  const [loading,setLoading]=useState(false)
  const [updateview,setUpdateview]=useState(false)
  const [name,setname]=useState({
    firstName:'',
    lastName:''
  })
  useEffect(()=>{
     const fetchData=async()=>{
          try {
            setLoading(true)
            const res=await api.get(`/auth/profile`)
            setData(res.data.data)
            setname({
              firstName:res.data.data.firstName,
              lastName:res.data.data.lastName
            })
          } catch (error) {
             console.log(error)
          }finally{
            setLoading(false)
          }
     }
     fetchData()
  },[])

  const handleupdate=async()=>{
    try {
      const res=await api.post('/auth/updateprofile',name)
      setData(res.data.data)
      toast.success(res.data.message)
      setUpdateview(prev=>!prev)
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <Userlayout>
      {loading?(
        <div className='bg-black/40 backdrop-blur-xs inset-0 flex justify-center items-center'>
           <FaSpinner className='text-white h-30 w-30'/>
        </div>
      ):
        updateview?(
              <div className='flex flex-col justify-center items-center mt-10'>
         <div className='bg-white shadow-lg rounded-lg p-10 flex flex-col gap-3'>
           <h2 className='text-4xl font-bold'>Hi, {data.firstName}</h2>
           <p>Email: <span className='text-slate-800'>{data.email}</span></p>
           <button onClick={()=>setUpdateview(prev=>!prev)} className='bg-blue-700 hover:opacity-80 p-2  text-white'>Edit Profile</button>
         </div>
      </div>
        ):(
            
         <div className='flex flex-col justify-center items-center mt-10'>
         
         <div className='bg-white shadow-lg rounded-lg p-10 flex flex-col gap-2 relative'>
          <button onClick={()=>setUpdateview(prev=>!prev)} className='absolute left-3 top-3 text-blue-600'>Back</button>
           <h2 className='text-4xl font-bold'>Edit Profile</h2>
          <label htmlFor="email">Email</label>
           <input type="text" id='email' disabled value={data.email} className='outline p-2'/>
            <label htmlFor="name">Name</label>
           <input type="text" id='firstName' name='firstName'  value={name.firstName} onChange={(e)=>setname(prev=>({...prev,firstName:e.target.value}))} className='outline p-2'/>
            <input type="text" id='lastName' name='lastName'  value={name.lastName} onChange={(e)=>setname(prev=>({...prev,lastName:e.target.value}))} className='outline p-2'/>
           <button onClick={handleupdate} className='bg-blue-700 hover:opacity-80 p-2 text-white'>Save</button>
         </div>
         </div>
       
      )}
     
    </Userlayout>
  )
}

export default ProfilePage
