import React from 'react'

import { useNavigate } from 'react-router-dom'

const ItemCard = ({item}) => {
 
  const navigate=useNavigate()
    const getProperDate=()=>{
        const date=new Date(1693267200)
        return date.toDateString()
    }
    const handlenav=()=>{
     
      navigate(`/detailspage/${item._id}`)
    }
  return (
    <div className='bg-white flex flex-col gap-2 rounded-lg overflow-clip'>
      <img src={item.image} className='h-48 object-fill self-center'></img>
      <div className='mt-3 space-y-2 p-2'>

    
      <p className='text-md font-semibold capitalize'>{item.name}</p>
      <p className={`text-green capitalize ${item.condition.toLowerCase()==="new"?'text-green-500':'text-yellow-500'}`}>{item.condition}</p>
      <p className=''>{getProperDate()}</p>
        </div>
      <button className='bg-blue-950 text-white font-semibold p-2 capitalize hover:opacity-80 active:bg-red-500' onClick={handlenav}>View Details</button>
    </div>
    
  )
}

export default ItemCard
