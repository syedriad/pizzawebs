import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Images/pizzaLogo.png"
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  
  const [isHidden, setisHidden] = useState("hidden")
  let show = () => {
      setisHidden(isHidden === "hidden" ? "nohidden" : "hidden")
  }


  return (
    // <div className='flex  justify-between items-center p-10 w-screen h-10 bg-gray-600' >


    //     <div className='w-1/2' >

    //         <img src={logo} alt="afri"  className='w-20 sm:ml-32 ' />

    //     </div>


    //     <div className=' text-xl sm:text-2xl font-mono space-x-5 sm:mr-56  ' >
    //         <Link  to="/"> Home</Link>
    //         <Link  to="/menu"> Menu</Link>
    //         <Link  to="/about"> About</Link>
    //         <Link  to="/contact"> Contact</Link>
    //     </div>
       

    // </div>

    

  <div className="bg-black p-5">
  {/* Container div */}
    <div className="container mx-auto flex items-center justify-between">
    {/* Logo div on the left */}
        <div className="flex items-center">
        <img src={logo} alt="Logo" className="sm:h-14  h-10 w-auto mr-2  " />
        </div>

    {/* Menu div on the right */}
        <div className={ ` ${isHidden} sm:flex items-center  text-sm sm:text-2xl font-mono sm:mr-32 sm:space-x-6 space-x-2`}>
        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        <Link to="/menu" className="text-white hover:text-gray-300">Menu</Link>
        <Link to="/about" className="text-white hover:text-gray-300">About</Link>
        <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
        {/* Add more menu items as needed */}
        


        </div>

        <button  className='text-white ml-2 sm:hidden ' onClick={show} >
          <ReorderIcon/>
        </button>




    </div>
  </div>



  )
}

export default Navbar