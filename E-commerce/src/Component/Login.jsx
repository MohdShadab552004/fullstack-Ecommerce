import React, { useContext,useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import UserContext from '../Context/UserContext';

function Login() {
   const {
    register,
    handleSubmit,
    reset,
   } = useForm()
    const {setlogin} = useContext(UserContext);
    const [loginmessage,setloginmessage] = useState("")
    const onSubmit = async(data) => {
        const response = await fetch(`${import.meta.env.VITE_APP_URL}/login`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            credentials:'include',
            body:JSON.stringify(data)
            })
            if (response.ok) {
                const res = await response.json(); 
                console.log(res.message)
                if(res.login){ 
                    setloginmessage(res.message);
                    setlogin(res.login);
                    setTimeout(()=>{
                        window.history.back(); 
                    },1000)
                }else{
                  alert("invalid");
                }
              }
              reset();

    }
  return (
    <div className='w-ful   '>
        <div className='w-full h-full flex justify-center items-center'>
            <div className='w-[500px]  p-[2.5vw] bg-white '>
                <div className='mb-3'><h1 className='font-[600] text-[50px] text-center custom-500:text-[40px]'>Login</h1></div>
                <p className='text-center  mb-4'>Welcome back! Let's take you to your account.</p>
                <div className='w-full'>
                    {
                        ["Google","Facebook"].map((items,index) =>{
                            return <a key={index} href="#" className='h-[40px] border-[1px] my-3 border-zinc-500 rounded-full flex justify-center items-center font-[500]'>Continue with {items}</a>
                        })
                    }
                </div>
                <div className='w-full flex justify-between items-center'>
                    <div className='h-[0.8px] flex-1 bg-zinc-200'></div>
                    <div className='px-3'>OR</div>
                    <div className='h-[0.8px] flex-1 bg-zinc-200'></div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                        <input 
                            type="text" 
                            {...register("Username", {required:true}) }
                            className=" py-1 my-3  text-base border-b-[1px] border-zinc-500 h-[50px] w-full focus:border-b-[1px] focus:border-b-zinc-500 focus:outline-none custom-850:w-full" 
                            placeholder="Enter Username"/>
                        <input 
                            type="password" 
                            {...register("password" , {required:true})}
                            className=" py-1 my-3  text-base border-b-[1px] border-zinc-500 h-[50px] w-full focus:border-b-[1px] focus:border-b-zinc-500 focus:outline-none custom-850:w-full" 
                            placeholder="Enter password"/>
                            <Link to="/forget" className=''>Reset your password?</Link>
                            <button  className=' mt-12 w-full h-[50px] text-[18px] flex justify-center items-center bg-black text-zinc-100 border-black border-2 rounded-full  hover:bg-[#F8F8F8] hover:text-zinc-900 transition ease-in-out duration-500'>Login in</button>
                </form>
                <button  className=' mt-2 w-full h-[50px] text-[18px] flex justify-center items-center border-black border-2 rounded-full  hover:bg-zinc-900 hover:text-zinc-200 transition ease-in-out duration-500'>Don't have an account?<Link to="/signup" className="text-blue-400 ml-1">Sign up</Link></button>
                <p className={`${(loginmessage === "") ? 'hidden' : 'flex'} text-center`}>{loginmessage}</p>
                <p className='text-[12px] mt-[10px]'>By continuing to use our services, you acknowledge that you have both read and agree to our <Link to="" className='text-zinc-700 underline font-[600] '>Terms of Service</Link> and <Link to="" className='text-zinc-700 underline font-[600] '>Privacy Policy.</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login;