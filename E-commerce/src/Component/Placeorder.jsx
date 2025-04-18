import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import UserContext from '../Context/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs, faXmark } from '@fortawesome/free-solid-svg-icons';

function Placeorder() {
  const navigate = useNavigate();
  const { orderplace, setorderplace, cartdata, total } = useContext(UserContext);
  const { register, handleSubmit } = useForm();
  const [final, setfinal] = useState(false);
  const [selected, setselected] = useState(false);
  const [customer, setcustomer] = useState({});
  const [address, setaddress] = useState("");

  const uniqueid = () => {
    return Date.now() + Math.floor(Math.random() * 10000);
  };

  const onSubmit = (data) => {
    const Id = uniqueid();
    data.id = Id;
    const add = `${data.House_no} ${data.Area_building} - ${data.pincode}`;
    setaddress(add);
    setcustomer(data);
    setfinal(true);
  };

  const finalSubmit = async () => {
    const items = cartdata.map(item => ({ ...item })); // Ensure items are structured correctly
    customer.mode = 'COD';
    customer.items = items;
    customer.total = total
    const response = await fetch(`${import.meta.env.VITE_APP_URL}/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(customer)
    });

    const res = await response.json();
    if (res.status) {
      alert("Congratulations, Order Placed");
      setorderplace(false);
      navigate('/myorder');
    } else {
      alert("Failed to place order");
    }
  };

  return (
    <div className={`fixed w-full h-[100vh] pt-20 overflow-x-scroll top-0 backdrop-blur-[8px] bg-[#00000071] z-[100000] ${(orderplace) ? 'fixed' : 'hidden'}`}>
      <div className='w-full flex justify-center items-center'>
        <div className='w-[500px] flex flex-col border-2 p-[2.5vw] bg-white rounded-[20px] overflow-y-scroll'>
          <div className='flex flex-row-reverse items-center mb-7'>
            <FontAwesomeIcon onClick={() => setorderplace(false)} icon={faXmark} className='text-[18px] font-[400] cursor-pointer' />
          </div>
          <div className='w-full flex justify-between border-b-[1px] border-zinc-500 mb-[20px] h-[30px]'>
            <div className='text-[18px] px-[15px]'>Bill Summary</div>
            <div className='font-bold text-18px'>{`Total $${total}`}</div>
          </div>
          {!final ? (
            <div>
              <h3>Address Detail</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                {[
                  ["Full name", "text", "name"],
                  ["House/Flat/Block no.", "text", "House_no"],
                  ["Area/Building Name", "text", "Area_building"],
                  ["Pin code", "number", "pincode"],
                  ["Email Address", "email", "email"]
                ].map((item, index) => (
                  <input
                    key={index}
                    type={item[1]}
                    {...register(item[2], { required: true })}
                    className="py-1 my-3 text-base border-b-[1px] border-zinc-500 h-[50px] w-full focus:border-b-zinc-500 focus:outline-none"
                    placeholder={item[0]}
                  />
                ))}
                <button className='mt-2 w-full h-[50px] text-[18px] flex justify-center items-center rounded-full text-zinc-200 bg-zinc-900 border-2 border-zinc-200  hover:bg-zinc-100 hover:border-zinc-900 hover:text-zinc-900 transition ease-in-out duration-500'>Continue</button>
              </form>
            </div>
          ) : (
            <div>
              <h2 className='text-[18px] font-bold mb-3'>Delivery Details</h2>
              <div className='flex items-center justify-start text-zinc-700 border-[1px] border-zinc-300 p-2'>
                <FontAwesomeIcon icon={faLocationCrosshairs} className='mr-3 text-[12px]' />
                <p className='text-[15px]'>{address}</p>
              </div>
              <div>
                <h1 className='text-[18px] font-bold my-3'>Payment Option (1)</h1>
                <div onClick={() => setselected(true)} className={`border-[1px] ${selected ? 'border-zinc-900' : 'border-zinc-200'} flex justify-between p-2`}>
                  <p>Cash on Delivery</p>
                  <p>${total}</p>
                </div>
              </div>
              <button onClick={finalSubmit} className='mt-7 w-full h-[50px] text-[18px] flex justify-center items-center  text-zinc-200 bg-zinc-900 border-2 border-zinc-200 rounded-full hover:bg-zinc-100 hover:border-zinc-900 hover:text-zinc-900 transition ease-in-out duration-500'>Buy Now</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Placeorder;
