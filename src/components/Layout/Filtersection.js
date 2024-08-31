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
    }
  ]

  const PropertyType=(e)=>{
      setProperty(e.target.value)
  }

  const PriceType=(e)=>{
    setPrice(e.target.value);
  }


  return (
    <div className=' bg-[#f5f6f9] h-[15vh] w-[85%] justify-between items-center flex  text-left flex-wrap'>
      <div>
        <p className='text-xl font-medium'>Enter City</p>
        <input className=' bg-[#f1f7ff] h-8 w-[15rem] border-2 border-solid border-gray rounded' type="text" />
      </div>
      <hr />
      <div>
        <p className='text-xl font-medium'>Date</p>
        <input className='bg-[#f1f7ff] h-8 w-[15rem] border-2 border-solid border-gray rounded' type="date" name="" id="" />
      </div>
      <hr />
      <div>
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
      <hr />
      <div>
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
      <hr />
      <div>
        <button onClick={()=>{}} className='border-2 border-solid border-black px-4 py-1 rounded-[8px] hover:bg-black hover:text-white '>Search</button>
      </div>
    </div>
  )
}

export default Filtersection;
