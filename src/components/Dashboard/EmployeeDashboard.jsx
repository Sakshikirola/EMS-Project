import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import Header from '../../other/Header'
import TaskListNo from '../../other/TaskListNo'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = ({ changeUser }) => {

  const [userData] = useContext(AuthContext)

  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) 

  const employee = userData?.find(
    (e) => e.id === loggedInUser?.data?.id 
  )

  if (!employee) return null

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header changeUser={changeUser} data={employee} />
      <TaskListNo data={employee} />
      <TaskList data={employee} />
    </div>
  )
}

export default EmployeeDashboard

