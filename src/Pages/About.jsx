import React from "react";
import AboutImage from "../assets/Images/multiplePizzas.jpeg"

function About() {
  return (
    <div>


      <div  style={{backgroundImage:  `url(${AboutImage})` }}  className="w-full h-96 bg-center bg-no-repeat bg-cover  "  ></div>

      <div  className="flex items-center flex-col p-20" >
        <h1 className="text-4xl font-mono font-bold mb-8" >About Us</h1>
        <p   className="sm:w-4/5  text-justify  font-serif sm:text-lg text-sm ">
          {" "}
          Welcome to King Pizza – a haven for pizza aficionados seeking a slice
          of perfection. At the heart of our pizzeria is a commitment to
          crafting extraordinary pizzas that tell a tale of flavors and
          traditions. We pride ourselves on using the finest ingredients,
          blending them with time-tested recipes, and delivering an experience
          that goes beyond the ordinary. What sets us apart is our dedication to
          quality and the warmth of our welcoming space. King Pizza is not just
          about delicious pizzas; it's a gathering place for friends and
          families, where every slice is a work of art. Join us on a culinary
          adventure that celebrates the joy of sharing exceptional pizzas in a
          cozy, inviting ambiance. King Pizza – where passion meets perfection,
          and every pizza tells a delicious story.
        </p>
      </div>
    </div>
  );
}

export default About;
