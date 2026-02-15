import React from 'react'

const PaginationButton = ({setPage,pageSize,total,page}) => {
    const totalpages=Math.ceil(total/pageSize)
  return (
    <div className='flex gap-2 items-center'>
       <button className='bg-white p-1 shadow-lg' disabled={page===1} onClick={()=>setPage(prev=>prev-1)}>
          {`<<<`}
       </button>
       <p>page {page} of {totalpages}</p>
       <button className='bg-white p-1 shadow-lg' disabled={page===totalpages} onClick={()=>setPage(prev=>prev+1)}>
          {`>>>`}
       </button>
    </div>
  )
}

export default PaginationButton
