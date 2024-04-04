import React from "react";
import { Link } from "react-router-dom";
import BackGr from "../assets/Images/pizza.jpeg"

function Home() {
  return (
<div className="flex items-center justify-center h-screen bg-center  bg-no-repeat   bg-cover p-3" style={{backgroundImage: `url(${BackGr})`}} >
  <div className="w-full h-80 "  >
    
    <div className="flex flex-col justify-center items-center sm:items-start h-80 p-2" >

    <h1 className="sm:text-7xl text-4xl font-bold font-serif ">King's Pizza</h1>
    <p  className="sm:text-3xl text-1xl font-semibold  " >The Taste Never Had Before</p>

    <Link to="/menu">
      <button className="bg-gray-900 text-white px-4 py-2 mt-4 font-mono ">Order Now</button>
    </Link>
    </div>
    
  </div>
</div>

  );
}

export default Home;
