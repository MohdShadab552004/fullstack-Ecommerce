import React from 'react'

function Myordercartmain(props) {
  return (
    <div className='w-full flex justify-start gap-10 items-center p-[5px]'>
          <div className='w-[90px] h-[90px] '>
              <img src={props.image}  alt='images' className='w-full h-full'/>
          </div>
          <div>
            <h3>{props.title}</h3>
            <p>Status: dispatched</p>
          </div>
      </div>
  )
}

export default Myordercartmain