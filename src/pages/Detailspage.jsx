import React, { useEffect, useState } from 'react'
import Userlayout from '../layouts/Userlayout'
import {  useNavigate, useParams } from 'react-router-dom'

import DetailedCard from '../components/DetailedCard'
import { FaBaby, FaSpinner } from 'react-icons/fa'
import CommentsSection from '../components/CommentsSection'
import axios from 'axios'
import IP from '../utils/IP'

const Detailspage = () => {
  const {id}=useParams()
  console.log(id)
  const [data,setData]=useState({})
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()
  useEffect(()=>{
     const fetchData=async()=>{
      try {
        setLoading(true)
        const res=await axios.get(`${IP}/gift/${id}`)
        setData(res.data)
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false)
      }
     }
     fetchData()
  },[id])

  if(loading){
    return <div className='h-screen inset-0 bg-black/40 backdrop-blur-xs'><FaSpinner className='animate-ping height-30 w-30'/></div>
  }
  return (
   <Userlayout>
    <div className='mt-5 flex flex-col gap-3 items-center relative'>
       <button onClick={()=>navigate('/mainpage')} className='bg-gray-800 text-white rounded-md p-2 w-fit -translate-x-50 hover:opacity-80'>Back</button>
        <div className='w-full max-w-lg'>
           <DetailedCard  data={data}/>
        </div>
         <div className='w-full max-w-lg'>
          <CommentsSection id={data._id}/>
         </div>
        

    </div>
    
   </Userlayout>
  )
}

export default Detailspage