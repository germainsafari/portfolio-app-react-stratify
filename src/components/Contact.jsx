const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Extract form data
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    // Create email content (optional)
    const emailContent = `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `;

    // Send email using a 3rd party library (like react-mail)
    // Implement logic to send the email using your preferred library

    alert("Your message has been submitted!"); // Or provide a success message
  }

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Contact us by filling this form</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact
