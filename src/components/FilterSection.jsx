

const FilterSection = ({handlesubmit,handlechange,field}) => {
  
  return (
    <form onSubmit={handlesubmit} className='bg-slate-400 p-3 flex flex-col gap-2 shadow-xl rounded-sm'>
       <h2 className='text-lg font-semibold capitalize'>filters</h2>
       <label htmlFor="category" className='text-slate-800 capitalize text-lg'>category</label>
       <select name="category" id="category" className='p-2 bg-white shadow-sm' value={field.category} onChange={handlechange}>
         <option value="All">All</option>
        <option value="Living">Living</option>
        <option value="Kitchen">Kitchen</option>
         <option value="Office">Office</option>
        <option value="Bedroom">Bedroom</option>
      
       </select>

        <label htmlFor="condition" className='text-slate-800 capitalize text-lg'>Condition</label>
       <select name="condition" id="condition" className='p-2 bg-white shadow-sm' value={field.condition} onChange={handlechange}>
         <option value="All">All</option>
        <option value="New">New</option>
        <option value="Like New">Like New</option>
         <option value="Older">Older</option>
       </select>
       <label htmlFor="">Less than {field.year} years</label>
       <input type="range" id="range" value={field.year} min={0} max={10} step={0.1} onInput={handlechange} name="year"/>
       <input type="text" name='name' className='text-slate-800 capitalize text-lg p-2  bg-white' placeholder='Search for items...' value={field.name} onChange={handlechange}/>
       <input type="submit" value='search' className="bg-blue-700 p-2 roundedn-lg hover:opacity-80"/>
    </form>
  )
}

export default FilterSection
