import React from 'react'
import {useForm }from 'react-hook-form'


function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) =>{
    let response = await fetch(`${import.meta.env.VITE_APP_URL}/Contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(data), 
    });
    
  }
  return (
    <div className='max-w-[1360px] m-auto flex justify-between py-[100px] border-b-[1px] border-zinc-500 custom-850:flex-col custom-850:gap-9'>
      <div className='contact-para w-[48%] custom-850:w-full'>
        <h1 className='text-[4.5vw] w-[60%] leading-[3.6vw] mb-[45px] font-[400]'>Send us a message</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quidem sequi maiores praesentium eligendi doloremque, quibusdam illo possimus voluptate natus, dolorem laborum soluta? Qui facilis distinctio, numquam dignissimos recusandae vel.</p>
      </div>
      <div className='contact-main w-[48%]  p-10 rounded-[15px] overflow-hidden bg-[#F8F8F8] custom-850:w-full custom-500:p-5'>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full h-full flex justify-between items-center flex-wrap'>
          <input 
            type="text" 
            {...register("Name", { required: true })}
            className="search-box py-2 my-5 bg-[#F8F8F8] text-base border-b-[1px] border-zinc-500 h-[50px] w-[48%] focus:border-b-[1px] focus:border-b-zinc-500 focus:outline-none custom-850:w-full" 
            placeholder="Name"/>
          <input 
            type="Email" 
            {...register("Email", { required: true })}
            className="search-box py-2  my-5 bg-[#F8F8F8] text-base border-b-[1px] border-zinc-500 h-[50px] w-[48%] focus:border-b-[1px] focus:border-b-zinc-500 focus:outline-none custom-850:w-full" 
            placeholder="Email address"/>
          <input 
            type="number" 
            {...register("Contact", { required: true })}
            className="search-box py-2 my-5 bg-[#F8F8F8] text-base border-b-[1px] border-zinc-500 h-[50px] w-[48%] focus:border-b-[1px] focus:border-b-zinc-500 focus:outline-none custom-850:w-full" 
            placeholder="Contact number"/>
          <input 
            type="text" 
            {...register("Subject", { required: true })}
            className="search-box py-2 my-5 bg-[#F8F8F8]  text-base border-b-[1px] border-zinc-500 h-[50px] w-[48%] focus:border-b-[1px] focus:border-b-zinc-500 focus:outline-none custom-850:w-full" 
            placeholder="Subject"/>
          <textarea {...register("Message", { required: true })} className='w-full h-[80px] my-5 bg-[#F8F8F8]  mt-9 border-b-[1px] border-zinc-500' placeholder='Write message here'></textarea>
          <div className='mt-12 w-full'>
          <button  className='w-[250px] h-[75px] text-[20px] flex justify-center items-center bg-black text-zinc-100 border-black border-2 rounded-full t hover:bg-[#F8F8F8] hover:text-zinc-900 transition ease-in-out duration-500 custom-850:w-full'>Send Message</button>
          </div>
        </form>
      
      </div>

    </div>
  )
}

export default Contact 