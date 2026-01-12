import React from 'react'

const CompleteTask = ({ data }) => {
  return (
    <div className='shrink-0 h-full w-75 p-5 bg-[#3B82F6] text-white rounded-xl 
      hover:scale-[1.03] hover:shadow-xl transition-all duration-200'>

      <div className='flex justify-between items-center'>
        <h3 className='bg-blue-900 text-xs px-3 py-1 rounded-full'>
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

      <div className='mt-5'>
        <button className='w-full bg-[#22C55E] py-2 rounded-lg font-medium cursor-default'>
          ✓ Completed
        </button>
      </div>
    </div>
  )
}

export default CompleteTask
