import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'
import Myordercartmain from './Myordercartmain'

function Myordercart(props) {
  return (
    <div className='w-full border-[1px] border-zinc-100 m-auto my-[35px] rounded-[15px] overflow-hidden'>
      <div className='h-[70px] bg-zinc-200 w-full p-[5px] flex justify-between items-center'>
          <div className='flex flex-col '>
            <h3>ORDER PLACED</h3>
            <p>11 jun 2003</p>
         </div>
         <div className='flex flex-col flex-1 ml-10'>
            <h3>TOTAL</h3>
            <p>{props.total}</p>
         </div>
         <div className='flex flex-col'>
            <h3>ORDER ID</h3>
            <p>{props.id}</p>
         </div>
      </div>
      {/*main section */}
      {
        Object.values(props.items).map((item,index) => {

          return <Myordercartmain key={index} image={item.image} title={item.description}/>
        })  
      }
    </div>

  )
}

export default Myordercart