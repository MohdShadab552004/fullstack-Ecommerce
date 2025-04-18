import React, { useEffect , useState} from 'react'
import Myordercart from './Myordercart'

function Myorder() {
  const [orderdata,setorderdata] = useState({})
  
  const fetchdata = async () => {
    const res = await fetch(`${import.meta.env.VITE_APP_URL}/myorder`,{
      credentials:'include'
    })
    if(res.ok){
      const data = await res.json()
      setorderdata(data);
    }else{
      console.log("server error")
    }
  }
  useEffect(() => {
    fetchdata();
  },[])
  return (
    <div className='max-w-[800px]  m-auto px-5'>
        <h1 className='font-bold text-[40px] text-center'>My order</h1>
        {
          (orderdata && orderdata.myorder) ? (
            orderdata.myorder.map((item,index) => {
              return <Myordercart id={item.id} items={item.items} total={item.total}/>
            })
          ) : (<p className='text-center mt-20'>you do not place any order</p>)
        }
        
    </div>
  )
}

export default Myorder