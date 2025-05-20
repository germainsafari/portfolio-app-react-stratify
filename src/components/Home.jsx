import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaRobot, FaCloud, FaCode } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='space-y-6'>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
            Stratify AI Co.
          </h1>
          <h2 className='text-3xl sm:text-5xl font-bold text-[#8892b0]'>
            Transforming Businesses Through AI
          </h2>
          <p className='text-[#8892b0] py-4 max-w-[700px] text-lg'>
            We specialize in delivering cutting-edge AI solutions that drive business growth. 
            From custom machine learning models to cloud infrastructure and full-stack development, 
            we help businesses leverage the power of artificial intelligence.
          </p>
          
          {/* Key Services */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
            <div className='bg-[#112240] p-6 rounded-lg'>
              <FaRobot className='w-8 h-8 text-pink-600 mb-4' />
              <h3 className='text-xl font-bold mb-2'>AI Solutions</h3>
              <p className='text-gray-400'>Custom ML models, NLP, and computer vision solutions</p>
            </div>
            <div className='bg-[#112240] p-6 rounded-lg'>
              <FaCloud className='w-8 h-8 text-pink-600 mb-4' />
              <h3 className='text-xl font-bold mb-2'>Cloud & MLOps</h3>
              <p className='text-gray-400'>Azure, AWS, and GCP infrastructure with MLOps pipelines</p>
            </div>
            <div className='bg-[#112240] p-6 rounded-lg'>
              <FaCode className='w-8 h-8 text-pink-600 mb-4' />
              <h3 className='text-xl font-bold mb-2'>Development</h3>
              <p className='text-gray-400'>Full-stack applications and AI integration services</p>
            </div>
          </div>

          <div className='mt-8'>
            <Link to='work' smooth={true} duration={500} className='w-full md:w-auto block'>
              <button className='w-full md:w-auto text-white group border-2 px-6 py-3 my-2 flex items-center justify-center md:justify-start hover:bg-pink-600 hover:border-pink-600 transition-all duration-200'>
                Explore Our Services
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3' />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
