import React from 'react'

const FailedTask = ({ data }) => {
  return (
    <div className='shrink-0 h-full w-75 p-5 bg-[#EAB308] text-[#1F2933] rounded-xl 
      hover:scale-[1.03] hover:shadow-xl transition-all duration-200'>

      <div className='flex justify-between items-center'>
        <h3 className='bg-yellow-600 text-white text-xs px-3 py-1 rounded-full'>
          {data.category}
        </h3>
        <h4 className='text-xs opacity-80'>{data.date}</h4>
      </div>

      <h2 className='mt-5 text-2xl font-semibold'>
        {data.title}
      </h2>

      <p className='text-sm mt-2 opacity-90'>
        {data.description}
      </p>

      <div className='mt-5'>
        <button className='w-full bg-[#EF4444] text-white py-2 rounded-lg font-medium'>
          ✕ Failed
        </button>
      </div>
    </div>
  )
}

export default FailedTask

