import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthProvider'
import { FaBars } from 'react-icons/fa'

const NavBar = () => {
    const location=useLocation().pathname
    const {token,username,SignOut}=useAuthContext()
    const [mobileView,setMobileView]=useState(false)
    
  return (
    <>
    <div className='flex justify-between bg-white shadow-lg p-2'>
       <Link to={'/'} className='text-lg font-bold capitalize' >giftlink</Link>
       <div className='hidden gap-4 md:flex items-center'>
          <Link to={'/'} className='hover:bg-red-500 py-1 px-2 rounded-sm  text-blue-600'>Home</Link>
          <Link to={'/mainpage'} className={`${location==='/mainpage'?'border-3 bg-blue-500 text-white animate-glowBorder':""} px-2 py-1 rounded-sm hover:bg-red-500 text-blue-600 hover:text-white`}>Gifts</Link>
          <Link to={'/searchpage'} className={`${location==='/searchpage'?'border-3 bg-blue-500  text-white animate-glowBorder':""} px-2 py-1 rounded-sm hover:bg-red-500  text-blue-600 hover:text-white`}>Search</Link>

        {!token&&(
          <>
           <Link to={'/loginpage'} className={`${location==='/loginpage'?'border-3 bg-blue-500  text-white animate-glowBorder':"bg-green-500"} px-2 py-1  rounded-sm hover:bg-red-500  text-white hover:text-white`}>Login</Link>
         <Link to={'/registerpage'} className={`${location==='/registerpage'?' border-3 bg-blue-500  text-white animate-glowBorder':""} px-2 py-1 rounded-sm hover:bg-red-500  text-blue-600 hover:text-white`}>Register</Link>
          </>
        )}

        {token&&(
           <>
            
         <Link to={'/profilepage'} className={`${location==='/profilepage'?' border-3 bg-blue-500  text-white animate-glowBorder':""} px-2 py-1 rounded-sm hover:bg-red-500  text-blue-600 hover:text-white`}>Welcome,{username}</Link>
         <button onClick={()=>SignOut()} className={`${location==='/loginpage'?'border-3 bg-blue-500  text-white animate-glowBorder':"bg-green-500"} px-2 py-1  rounded-sm hover:bg-red-500  text-white`}>Logout</button>
           </>
        )}
      
       </div>
       <button className='md:hidden' onClick={()=>setMobileView(prev=>!prev)}><FaBars size={20}/></button>
    </div>
    {mobileView&&(
      <div className='bg-cyan-200 p-4 flex flex-col md:hidden'>
              <Link to={'/mainpage'} className={`${location==='/mainpage'?'border-3 bg-blue-500 text-white animate-glowBorder':""} px-2 py-1 rounded-sm hover:bg-red-500 hover:text-white text-blue-600`}>Gifts</Link>
          <Link to={'/searchpage'} className={`${location==='/searchpage'?'border-3 bg-blue-500  text-white animate-glowBorder':""} px-2 py-1 rounded-sm hover:bg-red-500 hover:text-white  text-blue-600`}>Search</Link>

        {!token&&(
          <>
           <Link to={'/loginpage'} className={`${location==='/loginpage'?'border-3 bg-blue-500  text-white animate-glowBorder':"bg-green-500"} px-2 py-1  rounded-sm hover:bg-red-500 hover:text-white  text-white`}>Login</Link>
         <Link to={'/registerpage'} className={`${location==='/registerpage'?' border-3 bg-blue-500  text-white animate-glowBorder':""} px-2 py-1 rounded-sm hover:bg-red-500  hover:text-white text-blue-600`}>Register</Link>
          </>
        )}

        {token&&(
           <>
            
         <Link to={'/profilepage'} className={`${location==='/profilepage'?' border-3 bg-blue-500  text-white animate-glowBorder':""} px-2 py-1 rounded-sm hover:bg-red-500  text-blue-600 hover:text-white`}>Welcome,{username}</Link>
         <button onClick={()=>SignOut()} className={`${location==='/loginpage'?'border-3 bg-blue-500  text-white animate-glowBorder':"bg-green-500"} px-2 py-1  rounded-sm hover:bg-red-500  text-white`}>Logout</button>
           </>
        )}
      </div>
    )}
    </>
  )
}

export default NavBar
