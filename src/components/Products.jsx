import React from 'react';
import Img1 from './images/img1.webp';
import Img2 from './images/img2.webp';
import Img3 from './images/img3.webp';
import Img4 from './images/img4.webp';
import Img5 from './images/img5.webp';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

const productsData = [
  {
    id: 1,
    img: Img1,
    title: 'Pastel Blue',
    rating: 4.8,
    aosDelay: 0,
  },
  {
    id: 2,
    img: Img2,
    title: 'Sahara Sand',
    rating: 4.5,
    aosDelay: 200,
  },
  {
    id: 3,
    img: Img3,
    title: 'Pearl Sand',
    rating: 4.8,
    aosDelay: 400,
  },
  {
    id: 4,
    img: Img4,
    title: 'Maxi Gawn',
    rating: 5.0,
    aosDelay: 600,
  },
  {
    id: 5,
    img: Img5,
    title: 'Plain Abaya',
    rating: 4.4,
    aosDelay: 700,
  },
];

const Products = () => {
  return (
    <div className='mt-14 mb-12'>
      <div className='container'>
        {/* Header Section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos="fade-up" className='text-sm text-amber-500'>
            Top Selling Products for Every Style
          </p>
          <h1 data-aos="fade-up" className='text-3xl font-bold'>
            Discover Our Exclusive Collection
          </h1>
          <p data-aos="fade-up" className='text-xs text-gray-400'>
            Explore our handpicked selection of premium products designed to elevate your style and comfort. From elegant designs to everyday essentials, we have something for everyone.
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
                alt={data.title}className='h-[220px] w-[150px] object-cover rounded-md transition-transform duration-300 hover:scale-105'
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

export default Products;