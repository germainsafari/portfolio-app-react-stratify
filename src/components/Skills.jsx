import React, { useState } from 'react';

import Mongo from '../assets/mongo.png';
import Tailwind from '../assets/tailwind.png';
import FireBase from '../assets/firebase.png';
import ai from '../assets/ai.png'
import people from '../assets/people.png'
import code from '../assets/code.png'

const webProjects = [
  {
    name: 'DocAI',
    image: require('../assets/projects/docAI.png'),
    url: 'https://v0-doc-ai-neon.vercel.app/',
    description: 'AI-powered document analysis and processing platform.',
    stack: ['Next.js', 'AI', 'TailwindCSS'],
  },
  {
    name: 'AmaziHealth',
    image: require('../assets/projects/amazihealth.png'),
    url: 'https://amazihealth.com',
    description: 'Healthcare management and patient care platform.',
    stack: ['React', 'Node.js', 'MongoDB'],
  },
  {
    name: 'Admin AI Editor',
    image: require('../assets/projects/admindaieditor.png'),
    url: 'https://admindeditor.vercel.app/',
    description: 'AI-powered content management and editing system.',
    stack: ['Next.js', 'AI', 'TailwindCSS'],
  },
  {
    name: 'DripClass',
    image: require('../assets/projects/dripclass.png'),
    url: 'https://dripclass.io/',
    description: 'Interactive online learning and course management platform.',
    stack: ['React', 'Node.js', 'MongoDB'],
  },
  {
    name: 'AI Personas',
    image: require('../assets/projects/aipersonas.png'),
    url: 'https://v0-ai-personas-omega.vercel.app/',
    description: 'AI-powered personas for brand and marketing teams.',
    stack: ['Next.js', 'OpenAI', 'TailwindCSS'],
  },
  {
    name: 'Faith+',
    image: require('../assets/projects/faith+.png'),
    url: 'https://v0-faith-v1.vercel.app/',
    description: 'A modern faith-based social and content platform.',
    stack: ['Next.js', 'TailwindCSS', 'Supabase'],
  },
  {
    name: 'Food Identifier',
    image: require('../assets/projects/foodidentifier.png'),
    url: 'https://foodidentifier-nine.vercel.app/',
    description: 'AI-powered food recognition and nutrition assistant.',
    stack: ['React', 'TensorFlow.js', 'TailwindCSS'],
  },
  {
    name: 'Masuria Hydrological Change',
    image: require('../assets/projects/masuria hydrological analysis.png'),
    url: 'https://v0-new-project-y9fs6wufzke.vercel.app/',
    description: 'Satellite-based water body change analysis using AI.',
    stack: ['Next.js', 'AI', 'Copernicus API'],
  },
  {
    name: '237: This is A Game',
    image: require('../assets/projects/game237.png'),
    url: 'https://v0-game-237.vercel.app/',
    description: 'A fun and interactive web-based game.',
    stack: ['React', 'GameJS', 'TailwindCSS'],
  },
];

const mlProjects = [
  {
    name: 'Brand Sentiment Analyzer',
    image: require('../assets/projects/aipersonas.png'),
    url: '',
    description: 'NLP-based tool for real-time brand sentiment analysis.',
    stack: ['Python', 'Transformers', 'Azure ML'],
  },
  {
    name: 'Asset Classifier',
    image: require('../assets/projects/masuria hydrological analysis.png'),
    url: '',
    description: 'Computer vision model for digital asset classification.',
    stack: ['PyTorch', 'CV', 'Azure'],
  },
];

const tagColors = {
  'Next.js': 'text-blue-400',
  'OpenAI': 'text-pink-400',
  'TailwindCSS': 'text-cyan-400',
  'Supabase': 'text-green-400',
  'React': 'text-blue-300',
  'TensorFlow.js': 'text-yellow-400',
  'AI': 'text-pink-400',
  'Copernicus API': 'text-green-300',
  'GameJS': 'text-orange-400',
  'Python': 'text-yellow-300',
  'Transformers': 'text-purple-400',
  'Azure ML': 'text-blue-500',
  'PyTorch': 'text-red-400',
  'CV': 'text-green-400',
  'Azure': 'text-blue-400',
};

const Projects = () => {
  const [tab, setTab] = useState('web');
  const projects = tab === 'web' ? webProjects : mlProjects;

  return (
    <div name='projects' className='w-full min-h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1100px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='flex items-center justify-between pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Projects</p>
          <div className='flex gap-2'>
            <button onClick={() => setTab('web')} className={`px-4 py-2 rounded-lg font-semibold ${tab==='web' ? 'bg-pink-600 text-white' : 'bg-[#112240] text-gray-300'} transition`}>Web Apps</button>
            <button onClick={() => setTab('ml')} className={`px-4 py-2 rounded-lg font-semibold ${tab==='ml' ? 'bg-pink-600 text-white' : 'bg-[#112240] text-gray-300'} transition`}>ML Projects</button>
          </div>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className='bg-[#181f3a] rounded-xl shadow-lg p-4 flex flex-col justify-between hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 relative group'
            >
              <a href={proj.url || undefined} target='_blank' rel='noopener noreferrer' className={proj.url ? '' : 'pointer-events-none'}>
                <img src={proj.image} alt={proj.name} className='rounded-lg w-full h-40 object-cover mb-4 group-hover:scale-105 transition-transform duration-300' />
              </a>
              <div>
                <h3 className='text-2xl font-bold mb-1'>{proj.name}</h3>
                <p className='text-gray-400 text-sm mb-2'>{proj.description}</p>
                <div className='flex flex-wrap gap-2'>
                  {proj.stack.map((tag, i) => (
                    <span key={i} className={`font-semibold ${tagColors[tag] || 'text-gray-400'}`}>#{tag}</span>
                  ))}
                </div>
              </div>
              {!proj.url && (
                <div className='absolute inset-0 bg-black/60 flex items-center justify-center rounded-lg'>
                  <span className='text-white font-bold text-lg'>Demo Unavailable</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
