import React, { useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Feature_cart(props) {
  let featurecartref = useRef()
  useGSAP(() => {
    gsap.fromTo(featurecartref.current, {
      opacity: 0,
    }, {
      opacity: 1,
      scrollTrigger: {
        trigger: featurecartref.current,
        start: "top 50%",
      },
    });
  }, []);

  return (
    <div ref={featurecartref} className=' w-[300px] mr-4 mt-2 '>
      <div className='feature_cart w-full h-[320px] rounded-[45px]  overflow-hidden'>
        <img src={props.images} alt="" className='w-full h-full '/>
      </div>
      <div className='mt-3 text-[22px] text-zinc-800'>{props.describe}</div>
      <p className='mt-1 text-zinc-500'>{props.categories}</p>
      <h2 className='text-[18px] text-zinc-900 mt-4'>${props.price}</h2>
    </div>
  );
}