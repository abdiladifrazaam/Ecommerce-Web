import React, { useState, useEffect } from 'react';
import { IoMdSearch } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";

const DropDownlinks = [
  {
    id: 1,
    name: "Trending products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Top Products",
    link: "/products", 
  },
  {
    id: 4,
    name: "Women's Shirts",
    link: "/womenshirts", 
  },
  {
    id: 3,
    name: "Shoes",
    link: "/shoes", 
  },
  {
    id: 5,
    name: "Perfumes",
    link: "/perfumes", 
  },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState('true');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* upper navbar */}
      <div className={`sticky top-0 ${isScrolled ? 'fixed top-0 left-0 right-0 z-50' : ''} bg-yellow-200 py-2`}>
        <div className='container mx-auto max-w-7xl flex justify-between items-center'>
          <a href="#" className='font-bold text-2xl sm:text-3xl flex  items-center'>
            ZAAD COLLECTIONS
          </a>

          {/* search bar and order button */}
          <div className='flex justify-between items-center gap-4'>
            <div className='relative group hidden sm:block'>
              <input
                type="text"
                placeholder='search'
                className='w-[200px] sm:w-[200px] group-hover:w-[300px] 
                          transition-all duration-300 
                           rounded-full border border-gray-300 px-2 py-1
                            focus:outline-none focus:border-1 
                           focus:border-yellow-400 focus:border-primary bg-white'
              />
              <IoMdSearch 
                className='text-gray-500 group-hover:text-yellow-50 absolute top-1/2 -translate-y-1/2 right-3'
              />
            </div>
         
            {/* Order button */}
            <button
              onClick={() => alert("Ordering is not available yet")}
              className='bg-gradient-to-r from-blue-400 to-yellow-300 transition-all 
              duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'
            >
              <span className='group-hover:block hidden transition-all duration-200'>
                Order
              </span>
              <IoMdCart 
                className='text-xl text-white drop-shadow-sm cursor-pointer'
              />
            </button>
          </div>
        </div>
      </div>

      {/* lower navbar */}
      <div className='flex justify-center shadow-md'>
        <ul className='sm:flex hidden items-center gap-4'>
          {menu.map((data) => (
            <li key={data.id}> 
              <a href={data.link} className='inline-block px-4 duration-200 hover:text-amber-600'>
                {data.name}
              </a> 
            </li>
          ))}
          {/* dropdown menu */}
          <li className='group relative cursor-pointer'>
            <a href="#" className='flex items-center gap-[2px] py-2'>
              Trending Items
              <span>
                <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/>
              </span>
            </a>
            <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md'>
              <ul>
                {DropDownlinks.map((data) => (
                  <li key={data.id}>
                    <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-amber-200'>
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;