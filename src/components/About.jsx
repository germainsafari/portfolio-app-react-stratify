import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaExternalLinkAlt } from 'react-icons/fa';

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-[#0a192f] text-gray-300 pt-16 pb-16'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-6 px-4'>
          <div className='text-center sm:text-right pb-4 sm:pb-8 pl-0 sm:pl-4'>
            <p className='text-3xl sm:text-4xl font-bold inline border-b-4 border-pink-600 leading-tight mb-4 sm:mb-0'>
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-6 px-4'>
          <div className='text-center sm:text-right text-2xl sm:text-4xl font-bold leading-snug mb-4 sm:mb-0'>
            <p>Hi, I'm Safari Germain</p>
            <p className='text-lg sm:text-2xl text-pink-600 mt-2 leading-snug'>AI & ML Engineer</p>
            <div className='flex justify-center sm:justify-end space-x-4 mt-4'>
              <a href="https://www.linkedin.com/in/safari-germain/" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-pink-600'>
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/germainsafari" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-pink-600'>
                <FaGithub size={24} />
              </a>
              <a href="mailto:sfrgermain@gmail.com" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-pink-600'>
                <FaTwitter size={24} />
              </a>
            </div>
            <div className='mt-6'>
              <a href="https://sfrgermain.netlify.app" target="_blank" rel="noopener noreferrer" className='inline-flex items-center px-4 py-2 mt-4 bg-pink-600 text-white rounded hover:bg-pink-700 transition'>
                View My Portfolio <FaExternalLinkAlt className='ml-2' />
              </a>
            </div>
          </div>
          <div className='space-y-4 text-center sm:text-left'>
            <p className='text-base sm:text-lg'>
              I'm a Machine Learning Engineer & Team Lead with extensive experience in NLP, computer vision, and GenAI applications. 
              As a Certified Azure Data Scientist, I specialize in cloud infrastructure, MLOps, and deployment at scale.
            </p>
            <p className='text-base sm:text-lg'>
              With a strong background in full-stack development and a proven track record in automating workflows, 
              I help businesses leverage AI to drive growth and innovation.
            </p>
            <div className='mt-6'>
              <h3 className='text-lg sm:text-xl font-bold mb-2'>Key Expertise:</h3>
              <ul className='list-disc list-inside space-y-1 text-gray-400'>
                <li>AI/ML: Python, TensorFlow, Hugging Face, PyTorch</li>
                <li>Cloud: Azure, AWS, GCP, Kubernetes</li>
                <li>Full-Stack: React, Node.js, Django</li>
                <li>DevOps: Docker, CI/CD, MLOps</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
