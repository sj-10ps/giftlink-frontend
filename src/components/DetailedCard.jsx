import React from 'react'


const DetailedCard = ({data}) => {
    const getdate=()=>{
      const date=new Date(data.date_added).toLocaleTimeString()
      return date
    }
    
  return (
    <div className='bg-white rounded-lg flex flex-col gap-2 overflow-hidden'>
       <div className='bg-blue-600 pl-3 py-3 text-white text-xl text-bold'>
         {data.name}
       </div>
          <img src={data.image} className='h-64 object-fill'></img>
       <div className='flex flex-col gap-2 p-2'>
         <p className='font-bold text-md'>Category: <span className='text-md font-normal'>{data.category}</span></p>
       <p className='font-bold text-md'>Condition: <span className='text-md font-normal'>{data.condition}</span></p>
       <p className='font-bold text-md'>Date Added: <span className='text-md font-normal'>{getdate()}</span></p>
       <p className='font-bold text-md'>Age(in years) <span className='text-md font-normal'>{data.age_years}</span></p>
       <p className='font-bold text-md'>Decription: <span className='text-md font-normal max-w-xl'>{data.description}</span></p>


       </div>
    </div>
  )
}

export default DetailedCard
