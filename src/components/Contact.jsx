import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Extract form data
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    alert("Your message has been submitted!");
  };

  return (
    <div name='contact' className='w-full min-h-screen bg-[#0a192f] flex flex-col justify-center items-center p-4'>
      <div className='max-w-[600px] w-full bg-[#112240] rounded-lg shadow-lg p-8'>
        <div className='pb-8 text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Let's connect! Fill out the form or reach me directly:</p>
        </div>
        <div className='flex justify-center gap-4 mb-6'>
          <a href='https://www.linkedin.com/in/safari-germain/' target='_blank' rel='noopener noreferrer' className='text-[#0077b5] hover:scale-110 transition-transform' aria-label='LinkedIn'>
            <FaLinkedin size={32} />
          </a>
          <a href='https://github.com/germainsafari' target='_blank' rel='noopener noreferrer' className='text-[#333] hover:scale-110 transition-transform' aria-label='GitHub'>
            <FaGithub size={32} />
          </a>
          <a href='mailto:sfrgermain@gmail.com' className='text-[#6fc2b0] hover:scale-110 transition-transform' aria-label='Email'>
            <FaEnvelope size={32} />
          </a>
        </div>
        <form method='POST' onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input className='bg-[#ccd6f6] p-2 rounded' type='text' placeholder='Name' name='name' required />
          <input className='p-2 bg-[#ccd6f6] rounded' type='email' placeholder='Email' name='email' required />
          <textarea className='bg-[#ccd6f6] p-2 rounded' name='message' rows='6' placeholder='Message' required></textarea>
          <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 rounded font-semibold transition-all duration-200'>Send Message</button>
        </form>
        <div className='mt-6 text-center'>
          <a href='mailto:sfrgermain@gmail.com' className='inline-block text-pink-600 font-bold underline hover:text-pink-400 transition'>Or email me directly</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
