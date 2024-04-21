import React from 'react';

import Mongo from '../assets/mongo.png';
import Tailwind from '../assets/tailwind.png';
import FireBase from '../assets/firebase.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
          {/* Removed the commented-out description */}
        </div>

        <div className='w-full flex justify-around py-8'>
          <div className='w-64 text-center'>
            <div className='service-container hover:shadow-lg transform hover:scale-1.05 transition duration-300'>
              <img className='w-40 mx-auto service-image' src={Mongo} alt="AI Consultation" />
              <div className='service-description'>
                <h3 className='font-bold text-lg mb-2'>AI Consultation Services</h3>
                <p className='text-sm'>
                  Unlock the potential of AI with our expert consultation services.
                </p>
              </div>
            </div>
          </div>
          <div className='w-64 text-center'>
            <div className='service-container hover:shadow-lg transform hover:scale-1.05 transition duration-300'>
              <img className='w-40 mx-auto service-image' src={Tailwind} alt="Autonomous AI" />
              <div className='service-description'>
                <h3 className='font-bold text-lg mb-2'>Autonomous AI Bots Development</h3>
                <p className='text-sm'>
                  Experience the future of automation with our AI bots development services.
                </p>
              </div>
            </div>
          </div>
          <div className='w-64 text-center'>
            <div className='service-container hover:shadow-lg transform hover:scale-1.05 transition duration-300'>
              <img className='w-40 mx-auto service-image' src={FireBase} alt="Software Development" />
              <div className='service-description'>
                <h3 className='font-bold text-lg mb-2'>Software Development</h3>
                <p className='text-sm'>
                  Transform your ideas into reality with our development services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
