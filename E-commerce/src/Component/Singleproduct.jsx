import React, { useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import Cart from './Cart';
import UserContext from '../Context/UserContext';
import { useForm } from 'react-hook-form';


function Singleproduct() {
    const {data} = useContext(UserContext);
    const {setcartlength} = useContext(UserContext);
    const {setcartdata} = useContext(UserContext);
    const {settotal} = useContext(UserContext);
    const {setcartlink,cartlink} = useContext(UserContext);
    console.log(cartlink)
    const {
        register,
        handleSubmit
    } = useForm()
    const uniqueid = () =>{
        return  Date.now() + Math.floor(Math.random() * 10000);
    }
    const onSubmit = async (data) => {
        data.image = cartlink.images
        data.id = uniqueid()
        data.price = data.price.replace('$', '');
        data.price = parseFloat(data.price);      
          const response = await fetch(`${import.meta.env.VITE_APP_URL}/shoppingAdd`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            credentials:'include',
            body:JSON.stringify(data)
            })
        const res = await response.json();
        console.log(res,"it si ");
        setcartdata(res.data);
        setcartlength(res.length)
        settotal(res.Total)
    }
  return (
   
    <>
        <div className='product-image-section relative mt-[80px]'>
            <div className='max-w-[1360px] flex justify-evenly m-auto pb-[40px] border-b-[1px] border-zinc-500 custom-850:flex-col custom-850:items-center'>
                <div className='product-side-image w-[45%] custom-850:w-[80%]'>
                    <div className='main-image-section w-full h-[32vw]  rounded-[2vw] overflow-hidden border-[1px] border-zinc-200 custom-850:h-[65vw]'>
                        {
                            
                            (cartlink ) ? <img src={cartlink.images} alt="images" className='w-full h-full'/>:
                            (
                                <p>loading...</p>
                            )
                        }
                      
                    </div>
                </div>
                <div className='product-describe w-[40%]  flex flex-col gap-5 pt-8 custom-850:w-full custom-850:p-[20px]'>
                {cartlink ? (
                    <>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("description")} className='font-bold text-[35px] custom-850:text-[32px] flex flex-wrap custom-500:text-[30px] custom-350:text-[25px] custom-500:w-[100%]' defaultValue={cartlink.categories}/>
                        <p>{cartlink.describe}</p>
                        <input {...register("price")} className='font-semibold text-[35px]' value={"$" + cartlink.price}/>
                        <div className='flex justify-between'>
                            <input {...register("contity")} type='number' className='border-b-[1px] border-zinc-500 w-[50px] ' defaultValue='1'/>
                            <select {...register("color")} className='w-[85%] border-b-[1px] border-zinc-500 p-2'>
                                <option>black</option>
                                <option>white</option>
                            </select>
                        </div>
                        <button  className='flex justify-center items-center w-[50%] h-[65px] bg-black text-zinc-100 text-[18px] border-black border-2 mr-5 mt-8 rounded-full hover:bg-[white] hover:text-zinc-900 transition ease-in-out duration-500 custom-500:w-full'>Add to cart</button>
                    </form>
                    </>
                    ):(<p>loading</p>)
                 }
                </div>
            </div>
            <div className='max-w-[1360px] m-auto pb-[40px] border-b-[1px] border-zinc-500 '>
                 <h1 className='w-full m-auto text-[25px] font-bold mt-20 px-[20px] overflow-hidden'>Related product</h1>
                 <main className='main-section mt-8'>
                    <div className='max-w-[1362px] m-auto flex justify-between flex-wrap custom-943:justify-center'>
                            {data && data.length > 0 && data[0].image ? (
                            data.slice(0,6).map((item,index)=>{
                            if(index === 6) return;
                            return <Link key={index} to="/singleproduct" ><Cart  images={item.image} categories={item.category} describe={item.title}/></Link>
                            })
                            ) : (
                            <Cart/>
                            )}
                    </div>
                </main>
            </div>
        </div>
    </>
  )
}

export default Singleproduct