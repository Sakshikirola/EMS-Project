import React from 'react'

const AcceptTask = ({ data }) => {
  return (
    <div className='shrink-0 h-full w-75 p-5 bg-[#22C55E] text-white rounded-xl 
      hover:scale-[1.03] hover:shadow-xl transition-all duration-200'>

      <div className='flex justify-between items-center'>
        <h3 className='bg-green-800 text-xs px-3 py-1 rounded-full'> 
          {data.category} 
        </h3>
        <h4 className='text-xs opacity-90'>{data.date}</h4>
      </div>

      <h2 className='mt-5 text-2xl font-semibold'>
        {data.title}
      </h2>

      <p className='text-sm mt-2 opacity-90'>
        {data.description}
      </p>

      <div className='flex justify-between gap-3 mt-5'>
        <button className='bg-[#16A34A] hover:bg-[#15803D] py-2 px-3 text-sm rounded-lg transition'>
          Mark as Completed
        </button>

        <button className='bg-[#EF4444] hover:bg-[#DC2626] py-2 px-3 text-sm rounded-lg transition'>
          Mark as Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask
