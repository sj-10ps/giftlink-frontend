import React from 'react'
import NavBar from '../components/NavBar'

const Userlayout = ({children}) => {
  return (
    <div className='flex flex-col bg-red-200 min-h-screen '>
        <NavBar/>
        <div className='animate-slideFromBottom'>
             {children}
        </div>
   
    </div>
  )
}

export default Userlayout
