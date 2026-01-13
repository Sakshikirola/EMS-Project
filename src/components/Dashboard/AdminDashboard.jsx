import React, { useContext } from 'react'
import Header from '../../other/Header'
import CreateTask from '../../other/CreateTask'
import AllTask from '../../other/AllTask'
import { AuthContext } from '../../context/AuthProvider' 


const AdminDashboard = ({ changeUser }) => {

  const [userData, setUserData] = useContext(AuthContext)

  return (
    <div className='h-screen w-full p-10'>
      <Header changeUser={changeUser} />

      <CreateTask
        userData={userData}
        setUserData={setUserData}
      />

      <AllTask
        userData={userData}
      />
    </div>
  )
}

export default AdminDashboard
