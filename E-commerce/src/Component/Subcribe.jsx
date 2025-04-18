import React,{useState} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useForm} from 'react-hook-form';
gsap.registerPlugin(ScrollTrigger);


function Subcribe() {
  useGSAP(()=>{
    gsap.from(".subcribe",{
        opacity:0,
        duration:0.3,
        scrollTrigger:{
            trigger:".subcribe",
            start:"top 80%"
        }
    })
    gsap.from(".subcribe-intro",{
        y:30,
        opacity:0,
        stagger:0.1,
        scrollTrigger:{
            trigger:".subcribe-intro",
            start:"top 70%"
        }
        
    })
})
    const {
        register,
        handleSubmit,
        reset,
        formState : {errors}
    } = useForm()
    const [subscribe,setsubcribe] = useState(false);
    const onSubmit = async(data) =>{
        let r = await fetch(`${import.meta.env.VITE_APP_URL}/Subcribe`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json", 
              },
            body: JSON.stringify(data)
        })
        const res = await r.json();
        reset()
        setsubcribe(res.subscribe)
        setTimeout(() => {
            setsubcribe(false);
        },3000)
    }
  return (
    <div className='subcribe max-w-[1360px] bg-[#F8F8F8] rounded-[45px] m-auto flex justify-center item-center py-28 mt-20 custom-1380:mx-[20px]'>
        <div className='max-w-[700px] flex flex-col justify-center items-center'>
            <h2 className='subcribe-intro text-[56px] text-center w-full custom-850:text-[40px]'>Subscribe to our email newsletter and get 10% off</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='w-[80%] h-[80px] flex justify-center border-zinc-400 border-b-[1px] mt-7 items-center' >
                <input {...register("Email", {required:true})} type="email" placeholder='Enter your Email' className='subcribe-intro w-[80%] h-[55px] bg-[#F8F8F8]'/>
                <button className='subcribe-intro w-32 h-[55px] text-zinc-200 text-[18px] bg-zinc-900 rounded-[45px]'>Subcribe</button>
            </form>
                <p className={`my-3 ${(subscribe) ? 'flex' : 'hidden'}`}>Thank you, Your are subsribe to CoolStuff</p>
            <p className='subcribe-intro flex gap-1 text-[18px] text-zinc-500 mt-5'><img src="https://cdn.prod.website-files.com/630784cc70ef0552ae1e91dc/6309459baba04e0b1b9cf94f_checkmark-outline-icon-shopper-webflow-ecommerce-template.svg" alt='right'/>Join the 10,000 users in our newsletter</p>

        </div>
    </div>
  )
}

export default Subcribe