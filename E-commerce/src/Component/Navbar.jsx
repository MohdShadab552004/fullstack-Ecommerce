import React, { useContext, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBars, faXmark ,faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link, NavLink,useNavigate} from 'react-router-dom'
import UserContext from '../Context/UserContext';
import Addtocart from './Addtocart';
import profilephoto from '../photos/profile.webp'
import Placeorder from './Placeorder';
// import Profile from './Profile.jsx';

function Navbar() {
  const [show, setShow] = useState(false);
  const {setisopen} = useContext(UserContext);
  const {setcartdata} = useContext(UserContext);
  const {cartlength} =  useContext(UserContext);
  const {setcartlength} = useContext(UserContext);
  const {settotal} = useContext(UserContext);
  const {login,setlogin} = useContext(UserContext)
  const [isprofile,setisprofile] = useState(false);
  const menuref = useRef()
  const profile = useRef();
  useGSAP(() => {
    var tl = gsap.timeline();

    tl.from(".logo", {
      y: -30,
      opacity: 0,
      duration: 0.2,
    });
    tl.from(".list", {
      y: -20,
      opacity: 0,
      stagger: 0.2,
    });
    tl.from(".main-menu-list", {
      y: -20,
      opacity: 0,
      stagger: 0.2,
    });
    
    tl.from(".cart", {
      y: -20,
      opacity: 0,
      stagger: 0.2,
    });
  });
  useGSAP(() => {
    const timeline1 = gsap.timeline();
    if(show){
      timeline1.to(menuref.current,{
        display:"flex",
        right:0,
        duration:0.5
      })
      timeline1.from(".menu-list",{
        x:150,
        opacity:0,
        stagger:0.2
      })
    }else{
      gsap.to(menuref.current,{
        display:"none",
        right:"-50%",
        duration:1
      })
    }
  },[show])
  useGSAP(() => {
    const timeline1 = gsap.timeline();
    if (isprofile) {
      timeline1.to(profile.current, {
        visibility: "flex",
        opacity: 1,
        right: 0,
        duration: 0.5
      });
      timeline1.from(".menu-list", {
        x: 150,
        opacity: 0,
        stagger: 0.2
      });
    } else {
      timeline1.to(profile.current, {
        display:"none",
        duration: 1,
        right: "-30%",
      });
    }
  }, [isprofile]);
  

  const shopping = async () => {
    const res = await fetch(`${import.meta.env.VITE_APP_URL}/shopping`,{
      credentials:'include'
    })
    if(res.ok){
      const data = await res.json()
      setcartdata(data.data)
      setcartlength(data.length);
      settotal(data.Total)
      setlogin(data.login);
    }else{
      console.log("server error")
    }
  }

  const logout = async () => {
    const response = await  fetch(`${import.meta.env.VITE_APP_URL}/logout`,{
      credentials:'include'
    });
    const res = await response.json();
    if(res.logout){
      setlogin(false)
    }
  }
  useEffect(() => {
    shopping();
    
  },[])
  return (
    <>
    
      <nav className='w-full h-[80px] flex justify-between items-center px-[20px] custom-850:px-[20px] z-[20]'>
        <div className='text-[28px] font-bold'>
          <h2 className='logo'><Link to="/">Cool Stuff</Link></h2>
       </div>

        <div className='flex justify-between gap-2'>
          <div className='flex items-center gap-10 mr-[70px] custom-850:hidden'>
            {[["Home","/"],[ "About","/about"], ["Product","/product"],["Contact",'/contact']].map((item, index) => (
              <NavLink 
              to={item[1]} 
              key={index} 
              className={({ isActive }) =>
                `list font-medium text-[18px] relative cursor-pointer 
                ${isActive ? 'text-zinc-500' : 'text-zinc-700'} 
                hover:text-zinc-500`
              }
            >
              {item[0]}
            </NavLink>
            ))}
          </div>
          <div className={` justify-space flex-wrap items-center mr-3 gap-2 custom-850:hidden ${(login) ? 'hidden' : 'flex'}`}>
            <div className='main-menu-list font-medium text-[18px] text-zinc-700 cursor-pointer hover:text-zinc-500 '><Link to="/login"> Login |</Link></div>
            <div  className='main-menu-list font-medium text-[18px] text-zinc-700 cursor-pointer hover:text-zinc-500'><Link to="/signup">Sign Up</Link></div>
          </div>
          <div onClick={() => setisprofile(true)} className={`w-[40px] h-[40px] rounded-full cursor-pointer bg-zinc-200 mr-2 overflow-hidden  justify-center items-center ${(!login) ? 'hidden' : 'flex'}`}>
            <img src={profilephoto} alt='profile' className='w-full h-full object-cover'/>
          </div>
          <div className='cart w-5 h-5 bg-white text-zinc-900 text-[10px] mt-1  border-black border-[1px] flex justify-center items-center rounded-full relative top-1'>
            {cartlength}
          </div>
          <div ref={profile}  className=' p-5 flex-col cursor-pointer gap-5 backdrop-blur-[28px] w-[30%] px-[40px] absolute top-[80px] right-[-30%] z-[50]'>
            <div className='w-[10px] font-[26px] absolute top-8 right-[30px]'><FontAwesomeIcon icon={faXmark} onClick={() => setisprofile(false)} className='flex flex-row-reverse' /></div>
            <div className='py-10 text-[18px]'>
                <div><Link   to="/myorder" className='my-4'>My order</Link></div>
                <div onClick={logout} className='my-4'><FontAwesomeIcon icon={faRightFromBracket} className='mr-2' />Logout</div>
            </div>   
            </div>
          <FontAwesomeIcon onClick={() => {setisopen(true)}} className='cart mt-1 text-2xl hover:text-zinc-600 cursor-pointer' icon={faBagShopping} />
          <div className='cart text-[23px] custom-850:flex justify-center items-center ml-3' onClick={()=>{
            setShow((prev) => !prev);
          }}>
            <FontAwesomeIcon icon={faBars} className={`hidden custom-850:flex ${show ? 'custom-850:hidden' : 'custom-850:flex'}`} />
          </div>
        </div>
      </nav>

      <div ref={menuref} className={`hidden p-5 flex-col gap-5 backdrop-blur-[28px] w-[50%] h-full px-[40px] absolute top-0 right-[-50%] z-[50]`}>
        <div onClick={() => {
          setShow((prev) => !prev);

        }} className='w-[10px] font-[26px] absolute top-8 right-[30px]'>
          <FontAwesomeIcon icon={faXmark} className={`${!show ? 'hidden' : 'flex'}`} />
        </div>

        <div className='menu-a flex flex-col justify-start items-start gap-8 py-10'>
            {[["Home","/"],[ "About","/about"], ["Product","/product"],["Contact",'/contact']].map((item, index) => (
                <NavLink 
                to={item[1]} 
                key={index} 
                className={({ isActive }) =>
                  `menu-list font-medium text-[18px] relative cursor-pointer 
                  ${isActive ? 'text-zinc-500' : 'text-zinc-700'} 
                  hover:text-zinc-500`
                }
              >
                {item[0]}
              </NavLink>
            ))}
          <div className={`flex justify-space flex-wrap items-center gap-2 `}>
            <div className=' menu-list font-medium text-[18px] text-zinc-700 cursor-pointer hover:text-zinc-500 '><Link to="/login">Login |</Link></div>
            <div  className='menu-list font-medium text-[18px] text-zinc-700 cursor-pointer hover:text-zinc-500'><Link to="/signup">Sign Up</Link></div>
          </div>
        </div>
      </div>
     <Addtocart/>
          <Placeorder/>
    </>
  );
}

export default Navbar;
