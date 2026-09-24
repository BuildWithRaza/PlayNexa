import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Login = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  function submitHandler(e){
    e.preventDefault();
    console.log("email is",email);
    console.log("password is",password);
    setEmail("");
    setPassword("");
  }


  return (
    <div className='flex justify-center items-center w-screen h-screen bg-blue-100'>
      <div className='flex flex-col justify-center items-cente w-fit px-5 bg-white border-[rgb(210,230,233)] border-2 rounded-xl py-14'>
        <h1 className='text-center text-4xl text-blue-700 font-bold'>Welcome Back!</h1>
        <h3 className='text-center text-xl text-blue-600 font-semibold '>Login to your Account</h3>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className='flex flex-col justify-center items-center gap-7 p-8'>
         
           <div>
            <h2 className='text-lg font-semibold mb-2'>Email</h2>
            <input value={email} onChange={e=>{setEmail(e.target.value)}} className='w-[350px]  h-[50px] border-2 bg-stone-200 py-2 border-stone-300 text-black placeholder:text-black placeholder:font-medium px-5 rounded-md' type="email" required  placeholder="Enter your Email" />
           </div>
           <div className=''>
            <h2 className='text-lg font-semibold mb-2'>Password</h2>
            <input value={password} onChange={e=>{setPassword(e.target.value)}} className='w-[350px]  h-[50px] border-2 bg-stone-200 py-2 border-stone-300 text-black placeholder:text-black placeholder:font-medium px-5 rounded-md' type="password" required  placeholder="Enter your Password" />
           </div>

           <div className='flex justify-between items-center w-full px-2'>
          <div className='flex justify-center items-center gap-1'>
            <input className='' type="checkbox" name="" id="rememberme" />
            <h2>Remember Me</h2>
          </div>
          <div className=""><a className='text-blue-700 font-semibold' href="/">Forgot Password?</a></div>
          </div>
          <button className='w-[350px] h-[50px] bg-blue-700 text-white font-semibold text-lg border-none rounded-md text-center'>Login</button>
      </form>
      <div className='flex items-center justify-center gap-2'><h3>Don't have an account?</h3><Link className='text-blue-700 font-semibold' to="/signup">Sign Up</Link></div>
      </div>
    </div>
  )
}

export default Login
