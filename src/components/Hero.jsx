import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from './images/image6.png';
import Image2 from './images/image2.png';
import Image3 from './images/Loyalty.png';

const imageList = [
  {
    id: 1,
    img: Image1,
    title: 'Welcome to ZAAD Collections',
    description: 'Discover the latest trends in fashion at unbeatable prices. Shop now and enjoy fast delivery!',
    price: 100,
  },
  {
    id: 2,
    img: Image2,
    title: 'Stylish Abayas for Every Occasion',
    description: 'Explore our exclusive collection of beautifully designed abayas, perfect for any event.',
    price: 200,
  },
  {
    id: 3,
    img: Image3,
    title: 'Loyalty Rewards Program',
    description: 'Become a gold-level customer by placing 5 orders annually and enjoy exclusive discounts!',
    price: 300,
  },
];

const Hero = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center'>
      {/* Background pattern */}
      <div className='h-[700px] w-[700px] bg-yellow-200 absolute -top-1/2 right-0 rounded-3xl rotate-45'></div>

      {/* Hero section */}
      <div className='container pb-8 sm:pb-0'>
        <Slider {...sliderSettings}>
          {imageList.map((item) => (
            <div key={item.id}>
              <div className='grid grid-cols-1 sm:grid-cols-2 relative z-50'>
                {/* Text content section */}
                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                  <h1
                    data-aos="zoom-out"
                    data-aos-once="true"
                    data-aos-duration="500"
                    className='text-5xl sm:text-6xl font-bold lg:text-7xl z-[9999]'
                  >
                    {item.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className='text-sm'
                  >
                    {item.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button className='bg-gradient-to-r from-yellow-600 to-blue-300 hover:scale-90 duration-105 text-black py-2 px-4 rounded-full'>
                      Order Now
                    </button>
                  </div>
                </div>

                {/* Image section */}
                <div className='order-1 sm:order-2'>
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className='relative z-10'
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 object-contain mx-auto lg:scale-120'
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;