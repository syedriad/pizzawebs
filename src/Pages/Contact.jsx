import React from 'react'
import ContPizza from "../assets/Images/pizzaLeft.jpg"

function Contact() {
  return (
    <div  className='flex justify-between' >

        <div  style={{ backgroundImage: `url(${ContPizza})` }}  className='h-screen w-1/2 bg-center bg-no-repeat bg-cover' ></div>
        
        
        
        <div className="w-1/2 p-10 ">
        <h1  className='text-center sm:text-4xl text-2xl font-bold font-mono mt-10 mb-10' > Contact Us</h1>

        <form id="contact-form" method="POST"  className='flex justify-center items-start flex-col w-auto md:text-lg sm:text-md text-sm font-serif  ' >
          <label htmlFor="name">Full Name: </label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email: </label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message: </label>
          <textarea
            rows="6"
    
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"  className='bg-green-600 px-2 rounded rounded-4 cursor-pointer py-1 ' > Send Message</button>
        </form>
      </div>




    </div>
  )
}

export default Contact