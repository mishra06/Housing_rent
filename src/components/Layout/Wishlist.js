import React, { useEffect, useState } from 'react'
import { FaBath, FaBed, FaRegHeart } from 'react-icons/fa';
import { TbSquareRotated } from 'react-icons/tb';
import { useSelector } from 'react-redux'


const Wishlist = () => {

  const FavCard = useSelector((state)=>state.products);
  const Cards = FavCard.AddToCart;
  const [cart,setCart] = useState(Cards);
  

  const RemoveCart=(id)=>{
      setCart(prevcart=>prevcart.filter(item => item.id !==id));
  }

  // console.log(cart,"after delet");
  
    useEffect(()=>{
      setCart(cart);
    },[cart])


  return (
    <div className='w-[75%] h-100vh flex flex-wrap  items-center gap-3 p-7'>
      {
         cart.map((detail,index)=>{
          return(
           <div key={index} className='w-[22rem] h-[60vh] items-center bg-[#f5f6f9]'>
            <div className='w-full h-[60%]'>
              <img className='w-full h-full' src={detail.image_link} alt="" />
            </div>
            <div className='w-[90%] flex flex-col h-[30%]'>
              <div className='flex justify-between items-center px-2 py-1'>
                <p className='text-lg font-medium'>{detail.amount_per_day}/day's</p>
                <span onClick={()=>{RemoveCart(detail.id)}} className='text-xl font-bold cursor-pointer'><FaRegHeart /></span>
              </div>
              <div className='text-lg font-medium px-2 py-1'>
                <p>{detail.name_of_property}</p>
              </div>
              <div className='text-lg font-medium px-2 py-1'>
                <p>{detail.address}</p>
              </div>
            </div>
            <div className='flex justify-around items-center h-[10%] w-full '>
              <div className=' flex justify-center items-center w-[30%] gap-1'>
                <span className='font-medium'><FaBed /></span>
                <span className='font-medium'>{detail.no_of_beds}Beds</span>
              </div>
              <div className='flex justify-center items-center w-[30%] gap-1'>
              <span className='font-medium'><FaBath /></span>
              <span className='font-medium'>{detail.no_of_bathrooms}Bath</span>
              </div>
              <div className='flex justify-center items-center w-[30%] gap-1'>
                <span><TbSquareRotated /></span>
                <span className='font-medium'>{detail.size_of_room}</span>
              </div>
            </div>
           </div>
          )
        })
      }
    </div>
  )
}

export default Wishlist
