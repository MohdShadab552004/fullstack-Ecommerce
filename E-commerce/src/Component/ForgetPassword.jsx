import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function ForgetPassword() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {
        register: registerForm1,
        handleSubmit: handleSubmitForm1,
    } = useForm();
    const {
        register: registerForm2,
        handleSubmit: handleSubmitForm2,
    } = useForm();
    const navigate = useNavigate();
   const [reset,setreset] = useState(false);
    const [email,setemail] = useState("");
    const [update,setupdate] = useState(false)
    const onSubmit1 = async (data) => {
        console.log("clicked");
        const response = await fetch(`${import.meta.env.VITE_APP_URL}/forget`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            credentials:'include',
            body:JSON.stringify(data)
            })
        console.log("bhai api chal rahi h");
        
        const res = await response.json();
        console.log(res.found);
        
        if(res.found){
            setreset(true);
            setemail(data.email);
        }else{
            alert("email not found");
        }
    }

    const onSubmit2 = async (data) => {
        data.email = email
        const response = await fetch(`${import.meta.env.VITE_APP_URL}/verify`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            credentials:'include',
            body:JSON.stringify(data)
            })
        const res = await response.json();
        if(res.verify){
            setupdate(true)
        }else{
            alert("wrong otp,please reenter")
        }
    }
    const onSubmit3 = async (data) => {
        data.email = email
        console.log(data);
        const response = await fetch(`${import.meta.env.VITE_APP_URL}/updatepassword`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            credentials:'include',
            body:JSON.stringify(data)
            })
            console.log("best kaam");
            
        const res = await response.json();
        if(res.successfull){
            console.log("hogaya sdfdf");
            
            alert("password change successfull");
            navigate("/login");
        } else {
            console.log("Password change failed", res.message);
            alert("Password change failed: " + res.message);
        }
    }
  return (
    <div className='w-full mt-20  '>
        <div className='w-[500px]  h-full flex justify-center items-center flex-col m-auto'>
            <div className=' p-[2.5vw] bg-white '>
                <div className='mb-3'><h1 className='font-[600] text-[3vw] text-center'>Forget Password?</h1></div>
                <p className='text-center  mb-4'>Enter your email address below and we will send you a link to reset your password.</p>
            </div>
                <form onSubmit={handleSubmit(onSubmit1)} className={`w-full ${(update) ? 'hidden' : 'block'}`}>
                    <input 
                        type="email" 
                        {...register("email" , {required:true})}
                        className=" py-1 my-3  text-base border-b-[1px] border-zinc-500 h-[50px] w-full focus:border-b-[1px] focus:border-b-zinc-500 focus:outline-none custom-850:w-full" 
                        placeholder="Enter Email"/>
                    <button  onClick={() => console.log("Button clicked")} type="submit" className={` mt-2 w-full h-[50px] text-[18px]  justify-center items-center bg-black text-zinc-100 border-black border-2 rounded-full  hover:bg-[#F8F8F8] hover:text-zinc-900 transition ease-in-out duration-500 ${(!reset) ? 'block' : 'hidden'}`}>Continue</button>
                </form >
                <form onSubmit={handleSubmitForm1(onSubmit2)} className={`w-full ${(update) ? 'hidden' : 'block'}`}>
                    <input 
                            type="number" 
                            {...registerForm1("otp" , {required:true})}
                            className={` py-1 my-3  text-base border-b-[1px] border-zinc-500 h-[50px] w-full focus:border-b-[1px] focus:border-b-zinc-500 focus:outline-none custom-850:w-full ${(reset) ? 'block' : 'hidden'}`} 
                            placeholder="Enter OTP"/>
                        <button  onClick={() => console.log("Button clicked")} type="submit" className={` mt-2 w-full h-[50px] text-[18px]  justify-center items-center bg-black text-zinc-100 border-black border-2 rounded-full  hover:bg-[#F8F8F8] hover:text-zinc-900 transition ease-in-out duration-500 ${(reset) ? 'block' : 'hidden'}`}>Continue</button>
                </form>
                <form onSubmit={handleSubmitForm2(onSubmit3)} className={`w-full ${(!update) ? 'hidden'  : 'block'}`}>
                <input 
                            type="password" 
                            {...registerForm2("password" , {required:true})}
                            className={` py-1 my-3  text-base border-b-[1px] border-zinc-500 h-[50px] w-full focus:border-b-[1px] focus:border-b-zinc-500 focus:outline-none custom-850:w-full ${(reset) ? 'block' : 'hidden'}`} 
                            placeholder="Enter New password"/>
                        <button  onClick={() => console.log("Button clicked")} type="submit" className={` mt-2 w-full h-[50px] text-[18px]  justify-center items-center bg-black text-zinc-100 border-black border-2 rounded-full  hover:bg-[#F8F8F8] hover:text-zinc-900 transition ease-in-out duration-500 ${(reset) ? 'block' : 'hidden'}`}>Update password</button>
                </form>
                <div  className={` mt-2 w-full h-[50px] text-[18px] flex justify-center items-center bg-black text-zinc-100 border-black border-2 rounded-full  hover:bg-[#F8F8F8] hover:text-zinc-900 transition ease-in-out duration-500 `}>Don't have an account<Link to="/signup" className="text-blue-400 ml-1">Sign up</Link></div>
            
        </div>
    </div>
  )
}

export default ForgetPassword;