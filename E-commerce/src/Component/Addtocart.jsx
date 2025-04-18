import React, { useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import UserContext from '../Context/UserContext';

function Addtocart() {
    const {isopen,setisopen} = useContext(UserContext)
    const {cartdata} = useContext(UserContext);
    const {setcartdata} = useContext(UserContext)
    const {setcartlength} = useContext(UserContext)
    const {total,settotal} = useContext(UserContext);
    const {setorderplace} = useContext(UserContext)
    const deletecart = async (id) => {
        const response = await fetch(`${import.meta.env.VITE_APP_URL}/item/${id}`,{
            method : 'DELETE',
            headers:{
               'Content-Type' : 'application/json' 
            },
            credentials: 'include'
        })
        const res = await response.json();
        setcartdata(res.cart)
        setcartlength(res.length)
        settotal(res.Total)
    }
    
  return (
    <div className={`fixed w-full h-[100vh] pt-20 overflow-x-scroll top-0 backdrop-blur-[8px] bg-[#00000071] z-[100000] ${(isopen) ? 'flex' : 'hidden'} `}>
        <div className='w-full  flex justify-center items-center'>
            <div className='w-[500px]  border-2 p-[2.5vw] bg-white rounded-[20px] overflow-y-scroll'>
                <div className='flex justify-between items-center mb-7'>
                    <h3 className='text-[22px] font-[400]'>Your cart</h3>
                    <FontAwesomeIcon onClick={(prev)=> setisopen(!prev)} icon={faXmark} className='text-[18px] font-[400] cursor-pointer' />
                </div>
                <div className='oncart'>
                    <div className='h-[270px] '>
                    {
                        (cartdata && cartdata.length > 0 ) ? (
                            cartdata.map((item,index) => {
                                return <div key={item.id} className='w-full flex border-b-[1px] border-zinc-500 pb-[20px] mb-[20px]'>
                                        <div className='w-[80px] h-[63px]'>
                                            <img src={item.image} alt="imaged" className='w-full h-full'/>
                                        </div>
                                
                                        <div className='w-[calc(100%-80px-48px)]  px-[15px]'>
                                            <div className='font-[700] text-zinc-600 text-[18px]'>{item.description}</div>
                                            <p className='text-zinc-500 text-[18px]'>{item.price}</p>
                                            <p className='text-zinc-500 text-[18px]'>color:{item.color}</p>
                                            <div onClick={() => deletecart(item.id)} className='inline-block text-zinc-500 border-b-2 border-zinc-500 text-[18px] cursor-pointer'>Remove</div>
                                        </div>
                                        <div className='w-[48px] h-[63px] border-b-[1px] border-zinc-500 '>
                                            <input type="number" className='w-full h-full text-zinc-900' defaultValue={item.contity}/>
                                        </div>
                                    </div>   
                            })
                           
                    ) : <div className='offcart text-[18px]  flex justify-center items-center text-center text-zinc-500'>Your cart is empty</div>
                    }
                    </div>
                    <div className={`h-[180px]  ${(cartdata && cartdata.length > 0 ? 'flex flex-col' : 'hidden')}`}>
                                        <div className='w-full flex justify-between items-center'>
                                            <p className='text-zinc-500 text-[22px]'>Subtotal</p>
                                            <div className='text-zinc-900 text-[22px] font-[700]'>{total}</div>
                                        </div>
                                        <button onClick={() => setorderplace(true)} className='flex mt-7 justify-center items-center w-full h-[60px] text-[18px] text-zinc-100 border-white bg-zinc-900 border-[1.5px] rounded-full hover:bg-white hover:text-zinc-900 hover hover:border-zinc-900 '>Continue to checkout</button>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Addtocart