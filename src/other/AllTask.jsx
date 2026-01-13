import React from 'react'

const AllTask = ({ userData }) => {

  if (!userData || userData.length === 0) {
    return <p className="text-gray-400">No employees found</p>
  }

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5'>Employee Name</h2> 
        <h3 className='w-1/5'>New Task</h3>
        <h3 className='w-1/5'>Active</h3>
        <h3 className='w-1/5'>Completed</h3>
        <h3 className='w-1/5'>Failed</h3>
      </div>

      {userData.map((emp, idx) => (
        <div
          key={idx}
          className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'
        >
          <h2 className='w-1/5'>{emp.firstName}</h2>
          <h3 className='w-1/5 text-blue-400'>{emp.taskNumbers.newTask}</h3>
          <h3 className='w-1/5 text-yellow-400'>{emp.taskNumbers.active}</h3>
          <h3 className='w-1/5 text-white'>{emp.taskNumbers.completed}</h3>
          <h3 className='w-1/5 text-red-600'>{emp.taskNumbers.failed}</h3>
        </div>
      ))}
    </div>
  )
}

export default AllTask
