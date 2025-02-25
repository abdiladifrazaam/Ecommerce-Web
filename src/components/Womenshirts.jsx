import React from 'react';
import Imag1 from './images/imag1.webp';
import Imag2 from './images/imag2.webp';
import Imag3 from './images/imag3.webp';
import { FaStar } from 'react-icons/fa';

const ProductsData = [
  {
    img: Imag1,
    title: 'Long-Sleeve Silk Shirt',
    rating: 3,
    color: 'brown',
    aosDelay: '100',
    description: 'Elegant and comfortable silk shirt for any occasion.',
  },
  {
    img: Imag2,
    title: 'Malia Knitted Top',
    rating: 4.5,
    color: 'white',
    aosDelay: '100',
    description: 'Soft and stylish knitted top for a cozy look.',
  },
  {
    img: Imag3,
    title: 'Ami de Coeur Shirt',
    rating: 4.8,
    color: '#FFFFFF',
    aosDelay: '100',
    description: 'Chic and modern shirt for a sophisticated style.',
  },
];

const Womenshirts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className=" text-2xl text-amber-300">
            Women's Shirts
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Shirts for Women
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Discover our collection of premium women's shirts, designed to combine style, comfort, and elegance for every occasion.
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data, index) => (
            <div
              key={index} // Added key prop
              data-aos="zoom-in"
              className="rounded-2xl bg-white hover:bg-black/80 dark:hover:bg-amber-400 hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[200px]"> {/* Adjusted height */}
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-${
                        i < Math.floor(data.rating || 0) ? 'yellow-500' : 'gray-300'
                      }`}
                    />
                  ))}
                </div>
                <h1 className="text-xl font-bold dark:text-white">{data.title}</h1>
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-amber-400 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-amber-400"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Womenshirts;