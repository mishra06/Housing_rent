import React, { useState } from 'react'
import HouseData from "../../Data.json"

const Filtersection = () => {

  const [property , setProperty] = useState('');
  const [price, setPrice] = useState("");

  const propertytypesOptions= [
    {
      name:'house',
    },
    {
      name:'PG',
    },
    {
      name:'Farm House',
    },
    {
      name:'Villa',
    },
    {
      name:'Hotel',
    },
    {
      name:'Oyo',
    },
  ]

  const PricefilterOptions = [
    {
      Price:'0-500'
    },
    {
      Price:'500-1000'
    },
    {
      Price:'1000-1500'
    },
    {
      Price:'1500-2000'
    },
    {
      Price:'2000-2500'
    },
    {
      Price:'2500-3000'
    },
    {
      Price:'3000-3500'
    },
    {
      Price:'3500-4000'
    },
    {
      Price:'4000-4500'
    },
    {
      Price:'4500-5000'
    }
  ]

  const PropertyType=(e)=>{
      setProperty(e.target.value)
  }

  const PriceType=(e)=>{
    setPrice(e.target.value);
  }


  return (
    <div className='filterSection bg-[#f5f6f9] h-[15vh] w-[85%] justify-evenly items-center flex flex-wrap'>
      <div className='filterSection_first_inner_div h-full flex w-[75%] h-full justify-evenly align-center gap-6 '>
        <div className='filterSection_first_1_inner_div flex justify-between w-[50%] h-full items-center gap-4'>
            <div className='filterSection_first_2_inner_div flex flex-col justify-evenly w-full h-full'>
              <p className='text-xl font-medium'>Enter City</p>
              <input className=' bg-[#f1f7ff] h-8 w-[15rem] border-2 border-solid border-gray rounded' type="text" />
            </div>

            <div className='flex flex-col justify-evenly w-full h-full'>
              <p className='text-xl font-medium'>Date</p>
              <input className='bg-[#f1f7ff] h-8 w-[15rem] border-2 border-solid border-gray rounded' type="date" name="" id="" />
            </div>

        </div>
        <div className='filterSection_first_1_inner_div flex justify-between w-[50%] h-full items-center gap-4'>

            <div className='flex flex-col justify-evenly w-full h-full'>
              <p className='text-xl font-medium'>Price</p>
              <select className='bg-[#f1f7ff] h-8 w-[15rem] border-2 border-solid border-gray rounded' value={price} onChange={PriceType}>
              <option value="">0-3000</option>
              {
                PricefilterOptions.map((item,index)=>{
                  return(
                    <option key={index} value={item.Price}>{item.Price}</option>
                  )
                })
              }
              </select>
            </div>

            <div className='flex flex-col justify-evenly w-full h-full'>
              <p className='text-xl font-medium'>Property type</p>
              <select className='h-8 w-[15rem] border-2 border-solid border-gray rounded bg-[#f1f7ff]' value={property} onChange={PropertyType} >
                <option value="All">All</option>
                {propertytypesOptions.map((item,index)=>{
                  return(
                    <option key={index} value={item.name}>{item.name}</option>
                  )
                })}

              </select>
            </div>

        </div> 
      </div>
      <div className='filterSection_second_inner_div'>
        <button onClick={()=>{}} className='border-2 border-solid border-black px-4 py-1 rounded-[8px] hover:bg-black hover:text-white '>Search</button>
      </div>
    </div>
  )
}

export default Filtersection;
