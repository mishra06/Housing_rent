import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { TbSquareRotated } from "react-icons/tb";
import { useSelector,useDispatch } from 'react-redux';
import { SetAddToCart } from '../../redux/Slice/ProSlice';
import heart from "../../assets/heart.png"



const Layout = () => {

  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();

  const HouseData = useSelector(state => state.products);
  const Details = HouseData.ProductDetails;

  
const AddtoCart = (id) => {
  const itemToAdd = Details.find((item) => item.id === id);
  
  // if (itemToAdd) {
  //   setCart((prevCart) => [...prevCart, {...itemToAdd,"liked":true}]); 
  // }

  const cartitem = cart.find(item => item.id === id);
  if (!cartitem) {
    setCart((prevCart) => [...prevCart, {...itemToAdd,"liked":true}]); 
  }else{
    setCart((prevcart)=>prevcart.filter(item => item.id !==id))
  }
}

dispatch(SetAddToCart(cart));
  
// console.log(cart, 'Item added to cart');
  
  
  return (
    <div className='layOut_section w-[75%] h-100vh flex flex-wrap  items-center gap-3 p-7'>
      {
         Details.map((detail,index)=>{
          const isLiked = cart.some(item => item.id === detail.id);
          return(
           <div key={index} className='layout_inner_section w-[22rem] h-[60vh] items-center bg-[#f5f6f9]'>
            <div className='w-full h-[60%]'>
              <img className='w-full h-full' src={detail.image_link} alt="" />
            </div>
            <div className='layout_second_inner_section w-[90%] flex flex-col h-[30%]'>
              <div className='flex justify-between items-center px-2 py-1'>
                <p className='text-lg text-gray-500 font-medium'>{detail.amount_per_day}/day's</p>
                <span onClick={()=>{ AddtoCart(detail.id)}} className='text-xl font-bold cursor-pointer'>
                {isLiked? <img className='h-6 w-6' src={heart} alt="heart" />:<FaRegHeart />}
                  </span>
              </div>
              <div className='text-lg font-medium px-2 py-1'>
                <p className='text-gray-500'>{detail.name_of_property}</p>
              </div>
              <div className='text-lg text-gray-500 font-medium px-2 py-1'>
                <p>{detail.address}</p>
              </div>
            </div>
            <div className='flex justify-around items-center h-[10%] w-full '>
              <div className=' flex justify-center items-center w-[30%] gap-1'>
                <span className='font-medium text-gray-500'><FaBed /></span>
                <span className='font-medium text-gray-500'>{detail.no_of_beds}Beds</span>
              </div>
              <div className='flex justify-center items-center w-[30%] gap-1'>
              <span className='font-medium text-gray-500'><FaBath /></span>
              <span className='font-medium text-gray-500'>{detail.no_of_bathrooms}Bath</span>
              </div>
              <div className='flex justify-center items-center w-[30%] gap-1'>
                <span className='text-gray-500'><TbSquareRotated /></span>
                <span className='font-medium text-gray-500'>{detail.size_of_room}</span>
              </div>
            </div>
           </div>
          )
        })
      }
    </div>
  )
}

export default Layout
