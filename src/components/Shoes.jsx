import React from 'react';
import shoe1 from './images/shoe1.webp';
import shoe2 from './images/shoe2.webp';
import shoe3 from './images/shoe3.webp';
import shoe4 from './images/shoe4.webp';
import nike from './images/nike.webp';

import { FaStar, FaShoppingCart } from 'react-icons/fa';

const productsData = [
  {
    id: 1,
    img: shoe1,
    title: 'Gianvitto Rossi',
    rating: 4.8,
    aosDelay: 0,
  },
  {
    id: 2,
    img: shoe2,
    title: 'Chloe',
    rating: 4.8,
    aosDelay: 200,
  },
  {
    id: 3,
    img: shoe3,
    title: 'Aeyde',
    rating: 4.8,
    aosDelay: 400,
  },
  {
    id: 4,
    img: shoe4,
    title: 'Sander',
    rating: 5.0,
    aosDelay: 600,
  },
  {
    id: 5,
    img: nike,
    title: 'Nike P-6000',
    rating: 5.0,
    aosDelay: 800,
  },
];

const Shoes = () => {
  return (
    <div className='mt-14 mb-12'>
      <div className='container'>
        {/* Header Section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos="fade-up" className='text-sm text-amber-500'>
            Top Selling Shoes for Every Style
          </p>
          <h1 data-aos="fade-up" className='text-3xl font-bold'>
            Discover Our Exclusive Collection
          </h1>
          <p data-aos="fade-up" className='text-xs text-gray-400'>
            Elevate your footwear game with our handpicked selection of premium shoes. From timeless elegance to modern sporty designs, find the perfect pair for every occasion.
          </p>
        </div>

        {/* Product Grid Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 place-items-center'>
          {productsData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className='space-y-3'
            >
              {/* Product Image */}
              <img
                src={data.img}
                alt={data.title}
                className='h-[220px] w-[150px] object-cover rounded-md transition-transform duration-300 hover:scale-105'
              />

              {/* Product Details */}
              <div className='mt-3'>
                <h3 className='font-semibold'>{data.title}</h3>
                <div className='flex items-center justify-between'>
                  {/* Rating */}
                  <div className='flex items-center gap-1'>
                    <FaStar className='text-amber-300' />
                    <span>{data.rating}</span>
                  </div>
                  {/* Cart Icon */}
                  <button className='text-amber-300 hover:text-gray-900'>
                    <FaShoppingCart className='text-xl' />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shoes;