import React, { useEffect, useState } from 'react'
import CommentCard from './CommentCard'
import api from '../utils/axiossetup'
import { FaSpinner } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useAuthContext } from '../contexts/AuthProvider'
import { useNavigate } from 'react-router-dom'

const CommentsSection = ({id}) => {
    const {token}=useAuthContext()
    const [data,setdata]=useState([])
    const [loading,setLoading]=useState(false)
    const [comment,setcomment]=useState('')
    const [refresh,setRefresh]=useState(false)
    const navigate=useNavigate()
    useEffect(()=>{
        const fetchData=async()=>{
            try {
                setLoading(true)
                const res=await api.get(`/auth/comments/${id}`)
                setdata(res.data)
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    },[refresh,id])

    const handlesubmit=async(e)=>{
        e.preventDefault()
        try {
            if(!token){
                toast.error("you need to login to use this feature....redirecting you to login page...")
                setTimeout(()=>{
                 navigate('/loginpage')
                },3000)
               
                throw new Error("failed authentication")
            }
            const res=await api.post('/auth/comments',{comment,id})
            toast.success(res.data.message)
            setRefresh(prev=>!prev)
            
        } catch (error) {
             console.log(error)
             if(error.response?.status===429){
                toast.error(error.response.data.message)
             }
        }finally{
            setcomment('')
        }
    }
    if(loading){
        return(
            <div className='h-screen bg-black/40 inset-0 backdrop-blur-xs'>
               <FaSpinner className='h-30 w-30 animate-spin'/>
            </div>
        )
    }
  return (
    <div className='flex flex-col gap-2'>
        <form className='bg-white p-2 rounded-lg mt-2 flex flex-col gap-2' onSubmit={handlesubmit}>
            <label htmlFor="comment">Comment</label>
           <input type="text" name='comment' id='comment' value={comment} onChange={(e)=>setcomment(e.target.value)} className='bg-white p-1 outline' />
           <input type="submit" value={"submit"} className='bg-cyan-700 hover:opacity-80 p-2'/>
        </form>
        <h2 className='text-2xl font-bold'>Comments</h2>
         
        <div className='flex flex-col gap-2'>
        {data.map((d)=>(
          <CommentCard comment={d} key={d._id}/>
        ))}
             </div>

       

    </div>
  )
}

export default CommentsSection
