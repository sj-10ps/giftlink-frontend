import React from 'react'
import { useNavigate } from 'react-router-dom'

const IntroPage = () => {
  const navigate=useNavigate()
  return (
    <div className='min-h-screen relative flex justify-center items-center animate-slideFromLeft'>
     <div className='background-hero blur-xs absolute inset-0 -z-10'></div>
     <div className='flex flex-col gap-6 items-center'>
         <h2 className='text-2xl md:text-5xl capitalize font-semibold'>giftlink</h2>
         <h2 className='text-2xl md:text-5xl capitalize font-bold'>share gifts and joy!</h2>
         <p className=' text-lg md:text-xl text-shadow-md mx-5 md:max-w-[70%] text-center'>"sharing is the essence of community.it is through giving that we enrich and perpetuate both our lives and the lives of others"</p>
         <button onClick={()=>navigate('/mainpage')} className='bg-blue-500 hover:opacity-80 active:bg-red-700 rounded-full text-white font-semibold py-2 px-4 capitalize'>get started</button>
     </div>
    </div>
  )
}

export default IntroPage