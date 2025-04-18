import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import Cart from './Cart';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';
import UserContext from '../Context/UserContext';

gsap.registerPlugin(ScrollTrigger);

function Product() {

    useGSAP(() => {
          gsap.from(".anime", {
            y: 30,
            opacity: 0,
            stagger: 0.1,
            scrollTrigger: {
              trigger: ".anime",
              start: "top 80%",
            }
          });
          gsap.from(".search-box", {
            y: -30,
            opacity: 0,
            stagger: 0.3,
            delay:1,
            scrollTrigger: {
              trigger: ".search-box",
              start: "top 80%",
            }
          });
      })

    const {data} = useContext(UserContext)
      
  return (
    <div id="product" className='w-full mt-8 mb-9 px-[20px]'>
        <div  className='Search max-w-[1362px] mx-auto flex justify-between items-center border-b-zinc-700 border-b-[1px] custom-1000:border-none custom-1000:flex-col custom-1000:justify-center custom-1000:gap-3'>
            <div className='side-menu flex gap-[2px]'>
                {["All", "Shirt", "T-shirt", "Pants", "Jackets"].map((item, index) => (
                    <div key={index}>
                    <Link to="/" className='anime text-[18px] font-normal text-zinc-500 custom-500:text-[15px] custom-350:text-[12px]'>{item}</Link>
                    {index < ["All", "Shirt", "T-shirt", "Pants", "Jackets"].length - 1 && (
                        <span className='anime text-zinc-500 text-[18px] mx-3  custom-350:text-[12px]'>/</span>
                    )}
                    </div>
                ))}
            </div>
            <div className='mb-2 custom-1000:border-b-zinc-500 custom-1000:border-b-[1px]'>
                <input 
                    type="search"
                    className="search-box py-2 text-base border-none border-black h-[50px] w-[450px] focus:border-b-[1px] focus:border-b-zinc-500 focus:outline-none custom-1000:w-[550px] custom-700:w-[300px] custom-350:w-[250px]" 
                    placeholder="Search for products"/>  
                <FontAwesomeIcon icon={faMagnifyingGlass} className='search-box'/> 
            </div>
        </div>
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
  );
}

export default Product