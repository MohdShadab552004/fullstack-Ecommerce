import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer id="footer"  className='w-full mt-20 '>
        <div className=' w-full flex justify-around  custom-500:flex-col gap-3 custom-500:items-center'>
            <div className='w-[265px] flex gap-2 custom-1000:flex-col custom-1000:w-[100px]  custom-500:flex-row custom-500:w-[265px]  '>
                <img src="https://cdn.prod.website-files.com/630784cc70ef0552ae1e91dc/630cca6b348a9585effc81a4_free-shipping-square-icon-shopper-webflow-ecommerce-template.svg" alt="courier" />
                <div className='flex flex-col justify-around'>
                    <p  className='text-[20px]  custom-1000:text-[15px] custom-500:text-[20px]'>Free Shipping</p>
                    <p className='text-[20px] custom-1000:text-[15px] custom-500:text-[20px] text-zinc-500'>Over $29.99 USD</p>
                </div>
            </div>
            <div className='w-[350px] flex gap-2 custom-1000:flex-col custom-1000:w-[100px] custom-500:flex-row custom-500:w-[265px] '>
                <img src="https://cdn.prod.website-files.com/630784cc70ef0552ae1e91dc/630cca6bcd08345ae33e4300_secure-payments-square-icon-shopper-webflow-ecommerce-template.svg" alt="courier" />
                <div className='flex flex-col justify-around'>
                    <p  className='text-[20px] custom-1000:text-[15px] custom-500:text-[20px]'>Secure Payment</p>
                    <p className='text-[20px] custom-1000:text-[15px] custom-500:text-[20px] text-zinc-500'>With credit and debit card</p>
                </div>
            </div>
            <div className='w-[300px] flex gap-2 custom-1000:flex-col custom-1000:w-[100px] custom-500:flex-row custom-500:w-[265px] '>
                <img src="https://cdn.prod.website-files.com/630784cc70ef0552ae1e91dc/630cca6b8e284bdc869c9827_guarantee-square-icon-shopper-webflow-ecommerce-template.svg" alt="courier" />
                <div className='flex flex-col justify-around'>
                    <p  className='text-[20px] custom-1000:text-[15px] custom-500:text-[20px]'>30 Days guarantee</p>
                    <p className='text-[20px] custom-1000:text-[15px] custom-500:text-[20px] text-zinc-500'>No question asked</p>
                </div>
            </div>
        </div>
        <div className='bg-zinc-950 text-zinc-100 w-full rounded-t-[70px] pt-24 mt-20 custom-500:rounded-t-[50px]'>
            <div className='max-w-[1350px] m-auto flex justify-between border-zinc-400 border-t-[1px] custom-700:flex-col '>
                <div className='w-[40%] h-[400px]  border-zinc-400 border-r-[1px] custom-700:border-r-none custom-700:border-b-[1px] custom-700:w-full custom-700:h-auto custom-700:border-r-0'>
                    <div className='w-[80%] m-auto flex flex-col  items-start pt-20'>
                        <div className='text-[28px] font-bold'>
                            <h2 >Cool Stuff</h2>
                        </div>
                        <p className='mt-2 text-zinc-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, Lorem ipsum dolor sit a</p>
                        <div className='mt-3 mb-8 text-zinc-200 text-[30px] flex gap-4'>
                            <a href=""><FontAwesomeIcon icon={faFacebookSquare} /></a>
                            <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href=""><FontAwesomeIcon icon={faWhatsapp} /></a>
                        </div>
                    </div>
                </div>
                <div className='w-[60%] custom-700:w-full'>
                    <div className=' h-[300px] flex items-center custom-500:h-auto'>
                        <div className='flex justify-around p-[29px] w-full custom-500:flex-col custom-500:pr-5 custom-500:gap-5 custom-500:py-5'>
                            <div className='max-w-[380px] flex flex-col  items-start'>
                                <div className='text-[25px] text-zinc-200'>
                                    <h2 className='mb-3'>Contact Us</h2>
                                </div>
                                <div className='w-full flex justify-start gap-4 mt-2'>
                                    <img src="https://cdn.prod.website-files.com/630784cc70ef0552ae1e91dc/630cdc8cf5e8a329d3673cb7_phone-line-icon-shopper-webflow-ecommerce-template.svg" alt="photo" />
                                    <div>
                                        <p className='font-medium text-[18px]'>Phone</p>
                                        <p className='text-zinc-400'>7666696750</p>
                                    </div>
                                </div>
                                <div className='w-full flex justify-start gap-4 mt-2'>
                                    <img src="https://cdn.prod.website-files.com/630784cc70ef0552ae1e91dc/630cdc8d1eac1688631a15ef_email-line-icon-shopper-webflow-ecommerce-template.svg" alt="photo" />
                                    <div>
                                        <p className='font-medium text-[18px]'>Email</p>
                                        <p className='text-zinc-400'>CoolStuff@demo.com</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='text-[25px] text-zinc-200'>
                                    <h2 className='mb-3'>Menu</h2>
                                </div>
                                {[["Home","/"],["About","/about"],["Product","/product"]].map((item,index) => (
                                    <Link key={index} to={item[1]} className='block text-zinc-400 text-[18px] mb-3'>{item[0]}</Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className=' h-[100px] border-zinc-400 border-t-[1px] flex justify-center items-center gap-1'>
                        Copyright © PortFolio | Designed by <span className='text-[#e8ac7c]'>Mohd Shadab</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer