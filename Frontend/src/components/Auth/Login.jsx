import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { players,teams } from '../../utils/data';
import { BsXLg } from 'react-icons/bs';


const Login = () => {

  const navigate=useNavigate()
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  function submitHandler(e){
    e.preventDefault();
    console.log("email is",email);
    console.log("password is",password);
    if(email.includes("PLY")&&password==="player"){
       const player = players.find(
          (player) => player.id === email
        );
        
       if(player)
{        localStorage.setItem("user",JSON.stringify(player));
      localStorage.setItem("LoggedInUser","playerdash");
         navigate(`/playerdash/${email}`)
}      else
        alert("Player Not Found")
    }
    else if(email.includes("TEAM")&&password==="team"){
     const team = teams.find(
          (team) => team.id === email
        );
       if(team)
{           localStorage.setItem("user",JSON.stringify(team));
            localStorage.setItem("LoggedInUser","teamdash");
         navigate(`/teamdash/${email}`)}
        else
        alert("Team Not Found")
    }
    else{
      alert("User Not Found")
    }

    setEmail("");
    setPassword("");
    
   
 
  }


  return (

    <div className='flex justify-center items-center w-screen h-screen bg-blue-100'>
      <div className='flex flex-col justify-center items-cente w-fit px-5 bg-white border-[rgb(210,230,233)] border-2 rounded-xl py-14'>
        <div className='flex justify-center mb-3'>
           <Link
                      to="/"
                      className="flex shrink-0 items-center gap-2.5"
                    >
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-gradient-to-br
                          from-blue-600
                          to-cyan-500
                          text-sm
                          font-black
                          text-white
                          shadow-sm
                          shadow-blue-200
                        "
                      >
                        PN
                      </div>
          
                      <div className="hidden sm:block">
                        <h1 className="text-xl font-black leading-none tracking-tight">
                          <span className="text-slate-900">Play</span>
          
                          <span
                            className="
                              bg-gradient-to-r
                              from-blue-600
                              to-cyan-500
                              bg-clip-text
                              text-transparent
                            "
                          >
                            Nexa
                          </span>
                        </h1>
          
                        <p className="mt-1 text-[7px] font-bold tracking-[0.22em] text-slate-400">
                          PLAY • CONNECT • COMPETE
                        </p>
                      </div>
                    </Link>
        </div>
        <h1 className='text-center text-4xl text-blue-700 font-bold'>Welcome Back!</h1>
        <h3 className='text-center text-xl text-blue-600 font-semibold '>Login to your Account</h3>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className='flex flex-col justify-center items-center gap-7 p-8'>
         
           <div>
            <h2 className='text-lg font-semibold mb-2'>Email</h2>
            <input value={email} onChange={e=>{setEmail(e.target.value)}} className='w-[350px]  h-[50px] border-2 bg-stone-200 py-2 border-stone-300 text-black placeholder:text-black placeholder:font-medium px-5 rounded-md' type="text" required  placeholder="Enter your Email" />
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
