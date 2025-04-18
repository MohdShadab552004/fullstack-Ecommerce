import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Feature_cart from './Feature_cart'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UserContext from '../Context/UserContext'
gsap.registerPlugin(ScrollTrigger);

function Feature_product() {
  const {setcartlink} = useContext(UserContext);
  useGSAP(()=>{
    
    gsap.from(".feature-text",{
      bottom:"-25px",
      opacity:0,
      stagger:0.1,
      ease: "power3.inOut",
      scrollTrigger:{
        trigger:".feature-text",
        start:"top 70%"
      }
    })
  })

  const data = useContext(UserContext)
  return (
    <div className='w-full m-auto mt-20 px-[20px] overflow-hidden'>
      <div className='text-black h-[25px] mb-16 pl-[calc(100%-1400px)]'>
        <span className='feature-text text-[25px] h-full font-bold mr-[3px] relative bottom-[0px]'>F</span>
        <span className='feature-text text-[25px] h-full font-bold mr-[3px] relative bottom-[0px]'>E</span>
        <span className='feature-text text-[25px] h-full font-bold mr-[3px] relative bottom-[0px]'>A</span>
        <span className='feature-text text-[25px] h-full font-bold mr-[3px] relative bottom-[0px]'>T</span>
        <span className='feature-text text-[25px] h-full font-bold mr-[3px] relative bottom-[0px]'>U</span>
        <span className='feature-text text-[25px] h-full font-bold mr-[3px] relative bottom-[0px]'>R</span>
        <span className='feature-text text-[25px] h-full font-bold mr-[3px] relative bottom-[0px]'>E</span>
        <span className='feature-text text-[25px] h-full font-bold mr-[14px] relative bottom-[0px]'></span>
        <span className='feature-text text-[25px] h-full font-bold mr-[3px] relative bottom-[0px]'>P</span>
        <span className='feature-text text-[25px] h-full font-bold mr-[3px] relative bottom-[0px]'>R</span>
        <span className='feature-text text-[25px] h-full font-bold mr-[3px] relative bottom-[0px]'>O</span>
        <span className='feature-text text-[25px] h-full font-bold mr-[3px] relative bottom-[0px]'>D</span>
        <span className='feature-text text-[25px] h-full font-bold mr-[3px] relative bottom-[0px]'>U</span>
        <span className='feature-text text-[25px] h-full font-bold mr-[3px] relative bottom-[0px]'>C</span>
        <span className='feature-text text-[25px] h-full font-bold mr-[3px] relative bottom-[0px]'>T</span>
      </div>
      <div className='Nav-product w-full mt-4 flex justify-start overflow-x-auto no-scrollbar gap-4'>
        {data.data.length > 0 && data.data[0].image ? (
                  data.data.map((item,index)=>{
                    
                    return <div  key={index}  onClick={() => setcartlink({images:item.image,
                      categories:item.category,
                      describe:item.title,
                    price:item.price})}><Link to="/singleproduct"><Feature_cart  images={item.image} categories={item.category} describe={item.title} price={item.price}/></Link></div>
                  })
                  ) : (
                   
                  <p>loading...</p>
        )}
      </div>
    </div>
  )
}

export default Feature_product