  import React, { useEffect, useState } from 'react'
  import Userlayout from '../layouts/Userlayout'
  import FilterSection from '../components/FilterSection'
  import IP from '../utils/IP'
  import axios from 'axios'
  import { FaSpinner } from 'react-icons/fa'
  import ItemCard from '../components/ItemCard'
import SearchItemCard from '../components/SearchItemCard'
import PaginationButton from '../components/PaginationButton'

  const SearchPage = () => {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    const [field,setfield]=useState({
          category:'All',
          condition:'All',
          name:'',
          year:0,
      })

      useEffect(()=>{
        const fetchData=async()=>{
          try {
            setLoading(true)
            const res=await axios.get(`${IP}/gift`)
            setData(res.data.data)
          } catch (error) {
            console.log(error.message)
          }finally{
            setLoading(false)
          }
        }
        fetchData()
      },[])
  
    const handlechange=(e)=>{
      const {name,value}=e.target
      setfield(prev=>({
          ...prev,
          [name]:value
      }))
    }
    const handlesubmit=async(e)=>{
      e.preventDefault()
        try {
          setLoading(true)
        const url=`${IP}/search?category=${field.category}&condition=${field.condition}&name=${field.name}&year=${field.year}`
        const res=await axios.get(url)
        setData(res.data)
        console.log(res.data)
        } catch (error) {
          console.log(error)
        }finally{
          setLoading(false)
        }
    }
    
    return (
      <Userlayout>
        <div className='md:max-w-[30%] max-w-[70%] mx-auto mt-10'>
              <FilterSection handlesubmit={handlesubmit} handlechange={handlechange} field={field}/>
        </div>
        <div className='flex flex-col md:max-w-[30%] mx-auto gap-4 mt-5 max-w-[70%]'>
        
          {loading?(
            <div className='absolute h-screen bg-black/40 backdrop-blur-xs  inset-0  flex justify-center items-center'>
            <FaSpinner className=' animate-spin h-30 w-30'/>
            </div>
          ):(
            data.map((d)=>(
              <SearchItemCard key={d._id} item={d}/>
            ))
          )}
        </div>
    
      </Userlayout>
    )
  }

  export default SearchPage
