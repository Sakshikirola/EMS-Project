import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

   const submitHandler = (e) =>{
     e.preventDefault(); 
     handleLogin(email,password) 
     setEmail("");
     setPassword("");
   }

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-black'>
      <div className='border-2 border-emerald-600 rounded-2xl p-20 shadow-[0_0_40px_rgba(16,185,129,0.15)]'> 
       <h2 className='text-3xl font-semibold text-white text-center'>
          Welcome Back 
        </h2>
        <p className='text-gray-400 text-center mt-2 mb-8'>
          Login to continue
        </p>
       
        <form 
          onSubmit={(e)=>{ 
          submitHandler(e);
        }}
        className='flex flex-col items-center justify-center'>
            <input 
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value);  
            }}
            required 
            className='outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full text-white placeholder:text-gray-400 focus:ring-1 focus:ring-emerald-600 transition' type="email" placeholder='Enter your email'
            />
            <input 
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value); 
            }}
            required 
            className='outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full mt-3 placeholder:text-gray-400 focus:ring-1 focus:ring-emerald-600 transition' type="password" placeholder='Enter password'
            /> 
            <button className='text-white outline-none bg-emerald-600 py-3 px-5 text-xl rounded-full mt-7 placeholder:text-white hover:bg-emerald-700 hover:scale-[1.03] transition-transform
'>Login</button> 
        </form>
      </div> 
    </div>
  )
}

export default Login
