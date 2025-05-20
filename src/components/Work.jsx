import React from 'react';
import { FaRobot, FaCloud, FaCode, FaBrain, FaChartLine, FaTools } from 'react-icons/fa';

const Work = () => {
  const services = [
    {
      id: 1,
      name: "AI Consultation & Strategy",
      icon: <FaBrain className="w-16 h-16 mx-auto mb-4" />,
      description: "AI readiness assessment, use case discovery, and strategic roadmapping for your business",
      category: "AI Consultation"
    },
    {
      id: 2,
      name: "Custom ML Solutions",
      icon: <FaRobot className="w-16 h-16 mx-auto mb-4" />,
      description: "Predictive analytics, computer vision, and NLP solutions tailored to your needs",
      category: "AI Development"
    },
    {
      id: 3,
      name: "Cloud & MLOps",
      icon: <FaCloud className="w-16 h-16 mx-auto mb-4" />,
      description: "Azure, AWS, and GCP infrastructure setup with MLOps pipelines and CI/CD",
      category: "Cloud Engineering"
    },
    {
      id: 4,
      name: "Full-Stack Development",
      icon: <FaCode className="w-16 h-16 mx-auto mb-4" />,
      description: "Modern web applications with React, Node.js, and cloud-native architecture",
      category: "Software Development"
    },
    {
      id: 5,
      name: "Business Intelligence",
      icon: <FaChartLine className="w-16 h-16 mx-auto mb-4" />,
      description: "Data analytics, visualization, and business process automation",
      category: "AI Solutions"
    },
    {
      id: 6,
      name: "AI Integration",
      icon: <FaTools className="w-16 h-16 mx-auto mb-4" />,
      description: "Seamless integration of AI tools with your existing systems and workflows",
      category: "Integration"
    }
  ];

  return (
    <div name='work' className='w-full md:min-h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Our Services
          </p>
          <p className='py-6'>Transforming businesses through innovative AI solutions</p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-pink-600">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">{service.name}</h3>
              <p className="text-gray-400 text-sm text-center mb-4">{service.description}</p>
              <div className="flex justify-center">
                <span className="px-3 py-1 bg-pink-600/20 text-pink-600 rounded-full text-sm">
                  {service.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#112240] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Expertise & Experience</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Certified Azure Data Scientist</li>
                <li>• 5+ years in AI/ML development</li>
                <li>• Proven track record in enterprise solutions</li>
                <li>• Deep expertise in cloud infrastructure</li>
              </ul>
            </div>
            <div className="bg-[#112240] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Our Approach</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Customized solutions for your needs</li>
                <li>• End-to-end project management</li>
                <li>• Continuous support and maintenance</li>
                <li>• Focus on ROI and business impact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
