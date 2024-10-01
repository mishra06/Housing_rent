import React, { useCallback, useMemo, useState } from 'react'
import HouseData from "../../Data.json"
import { SetSearchByProperty } from '../../redux/Slice/ProSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Filtersection = () => {

  
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [selectPrice, setSelectPrice] = useState("");
  const [selectProperty , setSelectProperty] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const propertytypesOptions= [
    {
      name:'All',
    },
    {
      name:'house',
    },
    {
      name:'mansion',
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
    {
      name:'lodge',
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

  const SubmitHandeler = () => {
    if (city === "" && date === "" && selectPrice === "" && selectProperty === "") {
      alert("Please select at least one filter");
      return;
    } else {
      const filteredSearch = HouseData.filter((item) => {
        let priceRange = selectPrice.split("-");
        let minPrice = parseInt(priceRange[0]);
        let maxPrice = parseInt(priceRange[1]);
  
        if (selectProperty === "All") {
          return (
            (city === "" || item.city.toLowerCase().includes(city.toLowerCase())) &&
            (selectPrice === "" || (item.amount_per_day >= minPrice && item.amount_per_day <= maxPrice))
          );
        } else {
          return (
            (selectProperty === "" || item.type.toLowerCase().includes(selectProperty.toLowerCase())) &&
            (city === "" || item.city.toLowerCase().includes(city.toLowerCase())) &&
            (selectPrice === "" || (item.amount_per_day >= minPrice && item.amount_per_day <= maxPrice))
          );
        }
      });
      dispatch(SetSearchByProperty(filteredSearch));
      setCity("");
      setDate("");
      setSelectPrice("");
      setSelectProperty("");
      navigate("/search");
    }
  };
  


  return (
    <div className='filterSection bg-[#f5f6f9] h-[15vh] w-[85%] justify-evenly items-center flex flex-wrap'>
      <div className='filterSection_first_inner_div flex w-[75%] h-full justify-evenly align-center gap-6 '>
        <div className='filterSection_first_1_inner_div flex justify-between w-[50%] h-full items-center gap-4'>
            <div className='filterSection_first_2_inner_div flex flex-col justify-evenly w-full h-full'>
              <p className='text-xl font-medium'>Enter City</p>
              <input className=' bg-[#f1f7ff] h-8 w-[15rem] outline-none p-2 border-2 border-solid border-gray rounded'
              onChange={(e)=>{setCity(e.target.value)}}
              value={city} type="text" />
            </div>

            <div className='flex flex-col justify-evenly w-full h-full'>
              <p className='text-xl font-medium'>Date</p>
              <input 
              value={date} 
              onChange={(e)=>{setDate(e.target.value)}}
              className='bg-[#f1f7ff] h-8 w-[15rem] outline-none border-2 border-solid border-gray rounded' type="date" name="" id="" />
            </div>

        </div>
        <div className='filterSection_first_1_inner_div flex justify-between w-[50%] h-full items-center gap-4'>

            <div className='flex flex-col justify-evenly w-full h-full'>
              <p className='text-xl font-medium'>Price</p>
              <select 
              value={selectPrice} 
              onChange={(e)=>{setSelectPrice(e.target.value)}}
              className='bg-[#f1f7ff] h-8 w-[15rem] border-2 border-solid border-gray rounded'>
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
              <select 
              value={selectProperty}
              onChange={(e)=>{setSelectProperty(e.target.value)}}
              className='h-8 w-[15rem] border-2 border-solid border-gray rounded bg-[#f1f7ff]' >
                <option value="All">Select</option>
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
        <button onClick={SubmitHandeler} className='border-2 border-solid border-black px-4 py-1 rounded-[8px] hover:bg-black hover:text-white '>Search</button>
      </div>
    </div>
  )
}

export default Filtersection;
