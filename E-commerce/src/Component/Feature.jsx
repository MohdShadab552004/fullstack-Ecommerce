import React from 'react'
import { Link } from 'react-router-dom'
import shirt from '../photos/example.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Feature() {
    useGSAP(()=>{
        gsap.from(".feature",{
            opacity:0,
            duration:0.3,
            scrollTrigger:{
                trigger:".feature",
                start:"top 80%"
            }
        })
        gsap.from(".feature-intro",{
            y:30,
            opacity:0,
            stagger:0.1,
            scrollTrigger:{
                trigger:".feature-intro",
                start:"top 70%"
            }
            
        })
        gsap.from(".feature-img",{
            y:30,
            opacity:0 ,
            scrollTrigger:{
                trigger:".feature-img",
                start:"top 60%"
            }
        })
    })
  return (
    <div className='feature max-w-[1360px] border-2 border-black m-auto flex justify-between rounded-[45px] overflow-hidden bg-[#080808] mb-6 custom-850:flex-col custom-1380:mx-[20px]'>
        <div className=' w-1/2 h-[500px]  flex items-center justify-center custom-850:w-full custom-850:h-[350px]'>
            <div className='text-zinc-100 w-[80%]  flex flex-col items-start justify-start'>
                <h2 className='feature-intro font-normal text-[30px] mb-3'>Why we are different?</h2>
                <p className='feature-intro mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate velit tenetur quos maiores voluptatem sunt.</p>
                <Link to="/about" className='feature-intro  inline-block w-36 h-[60px] text-[18px] text-zinc-900 border-black bg-zinc-100 border-[1.5px] rounded-full pt-3 text-center hover:bg-black hover:text-zinc-100 hover hover:border-zinc-100 custom-500:w-full '>About us</Link>
            </div>
        </div>
        <div className='w-1/2 h-[500px] custom-850:w-full '>
            <img src={shirt} alt="shirt-img " className='feature-img w-full h-full' />
        </div>
    </div>
  )
}

export default Feature