import React,{useRef} from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Cart(props) {
  const artref = useRef()
  useGSAP(()=>{
 
    gsap.from(artref.current,{
      y:30,
      opacity:0,
      duration:0.5,
      scrollTrigger:{
        trigger:artref.current,
        start:"top 50%",
      }
    })

  })  
  
  return (
    <section ref={artref} className='product-cart max-w-[410px] mx-5 mb-16 custom-943:max-w-[550px]border-2 border-black'>
        <img src={props.images} alt="" className='w-full h-[430px]  rounded-[45px] overflow-hidden' />
        <div className='w-full my-5'>
            <p className='text-zinc-500 text-[18px]'>{props.categories}</p>
            <h2 className='text-xl text-zinc-900 font-semibold my-1'>{props.describe}</h2>
            {/* <p className='text-zinc-700 font-normal text-[20px] mt-3'>$99.99</p> */}
        </div>
    </section>
  )
}

export default Cart