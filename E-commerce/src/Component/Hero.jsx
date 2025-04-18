import React from 'react'
import { Link } from 'react-router-dom';
import side_img from '../photos/preview.webp'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';



function Hero() {
   
  useGSAP(() =>{
    var tl = gsap.timeline();
      tl.from(".side-hero",{
        x:-100,
        opacity:0,
        duration:0.5
      })
        gsap.from(".side-img",{
        x:100,
        opacity:0,
        duration:0.5,
        scrollTrigger:{
          trigger:".side-img",
          start:"top 60%"
        }
      })
      tl.from(".dash",{
        width:0,
        duration:0.5,
        delay:1
      })
    })
  

  return (
    <div className=' w-full bg-[#BBB7B4] px-[20px]'>
      <div className='max-w-[1360px] m-auto flex justify-between custom-1000:flex-col'>
          <div className='side-hero py-[150px] custom-1000:w-full'>
            <h1 className='w-full text-[40px] font-semibold font-Uncut_sans_vf custom-500:text-[26px] '>Discover Your Style</h1>
            <h1 className='w-full text-[40px] flex items-center font-semibold font-Uncut_sans_vf custom-500:text-[26px]'><div className='dash inline-block w-8 mr-2 h-[4px] bg-zinc-900'></div>Shop the Latest Trend</h1> 
            <p className='mt-2  max-w-[450px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nulla officiis voluptate odit perspiciatis deserunt, ab ducimus voluptas nostrum repellat!</p>   
            <div className='mt-8 gap-3 custom-500:flex custom-500:flex-col'>
                <a href='#product' className='inline-block w-44 h-[55px] bg-black text-zinc-100 border-black border-2 mr-5 rounded-full pt-3 text-center hover:bg-[#BBB7B4] hover:text-zinc-900 transition ease-in-out duration-500 custom-500:w-full'>Browse products</a>
                <Link to="/about" className='inline-block w-32 h-[55px]  text-zinc-900 border-black border-2 rounded-full pt-3 text-center hover:bg-black hover:text-zinc-100  transition ease-in-out duration-500 custom-500:w-full'>About us</Link>
            </div> 
          </div>
          <div className='side-img h-[650px] custom-500:h-[550px]'>
              <img src={side_img} alt="" className='w-[650px] h-full custom-1000:w-full '/>
          </div>
      </div>
    </div>
  )
}

export default Hero