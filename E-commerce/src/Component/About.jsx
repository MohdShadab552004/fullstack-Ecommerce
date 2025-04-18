import React from 'react'
import photo from '../photos/bag.jpg'

function About() {
  return (
    <div className='max-w-[1360px] m-auto border-b-[1px] border-zinc-500 pb-10 px-2'>
        <div className='max-w-[850px] m-auto pt-24'>
            <h1 className='font-[400] text-[52px] text-center leading-[1.25em] mb-8'>About our products</h1>
            <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quam impedit sit quos alias itaque dolorem, inventore unde aspernatur explicabo blanditiis, maxime reiciendis quia, optio earum cumque architecto aperiam magnam perferendis iure exercitationem voluptatem voluptates perspiciatis error. Ullam, voluptatum reprehenderit.</p>
        </div>
      
        <div className='w-full flex justify-between items-center flex-wrap my-[100px]'>
            {
              [["2024","Year founded"],["+50","Collection"],["1k","Happy customer"],["+250","Product"],["+10","Team"]].map((item,index) =>
                <div key="index" className='inline-block  text-center mx-10 my-10 custom-850:justify-start custom-500:mx-3'>
                  <h2 className='text-[68px] leading-[1.23em] mb-3'>{item[0]}</h2>
                  <p className='text-[20px] text-zinc-500'>{item[1]}</p>
                </div>
              )
            } 
        </div>

    </div>
  )
}

export default About