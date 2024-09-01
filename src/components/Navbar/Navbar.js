import React, { useEffect, useState } from 'react'
import { HiMiniHome } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { SetSearchByProperty } from '../../redux/Slice/ProSlice';

const Navbar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchdProperty = useSelector((state)=>state.products);
  // const filteredSearch = useSelector((state)=>state.products.SearchByProperty);
  const searched = searchdProperty?.ProductDetails;
  const [search,setSearch] = useState('');

  // useEffect(() => {
  //   if (search) {
  //     const filteredSearchResults = searched.filter((item) => item.name_of_property.toLowerCase().includes(search.toLowerCase()));
  //     dispatch(SetSearchByProperty(filteredSearchResults));
  //   }
  // }, [search, searched]);

  // console.log(filteredSearch,"from store")

  const submitHandeler = () => {
    if (search) {
      const filteredSearchResults = searched.filter((item) => {
        return (
          item.name_of_property?.toLowerCase().includes(search.toLowerCase()) ||
          item.address?.toLowerCase().includes(search.toLowerCase())
        );
      });
      dispatch(SetSearchByProperty(filteredSearchResults));
      setSearch('');
      navigate("/search");
    }
    else{
      alert("Without anything entered why you searched...?")
    }
  };

  
  
  return (
    <div className='flex justify-evenly items-center h-[15vh] w-full'>
      <div>
        <HiMiniHome onClick={() => navigate("/")} size={30} className='cursor-pointer text-green-800' />
      </div>
      <div >
        <h1 className='text-4xl font-medium capitalize text-red-800'>Search properties to rent</h1>
      </div>
      <div className=' flex justify-center-items-center gap-2'>
        <div className='flex gap-1'>
            <input
            value={search}
            onChange={(e)=>{setSearch(e.target.value)}}
             className='border-2 border-solid border-gray p-1 placeholder-gray-500 rounded px-2 bg-[#f1f7ff] ' placeholder="Search" type="text" />
            <button onClick={submitHandeler} className='border-2 border-solid border-black px-4 py-1 rounded-[8px] outline-none hover:text-white hover:bg-black'>Search</button>
        </div>
        <div>
            <button onClick={()=>navigate("/fab")} className='border-2 border-solid border-black px-4 py-1 rounded-[8px] outline-none hover:text-white hover:bg-black'>Likes</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
