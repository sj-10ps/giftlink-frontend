import React, { useEffect, useState } from 'react'
import Userlayout from '../layouts/Userlayout'
import ItemCard from '../components/ItemCard'
import axios from 'axios'
import IP from '../utils/IP'
import PaginationButton from '../components/PaginationButton'
import {FaSpinner} from 'react-icons/fa'

const MainPage = () => {
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(false)
  const [page,setPage]=useState(1)
  const [total,setTotal]=useState(0)
  const pageSize=6
  useEffect(()=>{
    
    const fetchData=async()=>{
      
      try {
        setLoading(true)
        const res=await axios.get(`${IP}/gift?page=${page}&pageSize=${pageSize}`)
        setData(res.data.data)
        setTotal(res.data.count)

      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false)
      }
    }

    fetchData()
  },[page])
  return (
   <Userlayout>
       <div className='flex justify-center mt-5'>
         <PaginationButton setPage={setPage} pageSize={pageSize} total={total} page={page}/>
      </div>
    {loading?(<div className=' absolute inset-0 bg-black/30 justify-center items-center backdrop-blur-xs flex'>
        <FaSpinner className='animate-spin h-30 w-30 text-white'/>
      </div>):(
        
        
           <div className='my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:max-w-[60%] md:mx-auto gap-4 mx-5'>
          {data.map((d)=>(
            <ItemCard key={d._id} item={d}/>
          ))}
          </div>
      )}

   
   
   </Userlayout>
  )
}

export default MainPage
