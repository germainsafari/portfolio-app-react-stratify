import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
       
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Stratify AI Co.
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          We are an AI consultation and Development Agency
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
                Welcome to Stratify AI Co, your premier destination for cutting-edge AI solutions!
                At Stratify AI Co, we specialize in AI consultation, crafting autonomous chatbots, 
                and top-notch software development services.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View our Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
