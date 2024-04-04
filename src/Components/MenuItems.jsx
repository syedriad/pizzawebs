import React from 'react'

function MenuItems( {image,name , price} ) {
  return (
    <div className=' lg:w-64 w-32 sm:w-40  h-64 lg:m-16 m-6  flex justify-start flex-col border-2 rounded-xl shadow-md hover:shadow-xl transition duration-600 ease-in cursor-pointer ' >

        <div style={ {backgroundImage: `url(${image})` } } className='h-32 w-full bg-center bg-no-repeat bg-cover border-2 border-t-xl' >  </div>
        <h1 className='sm:text-2xl text-lg ml-6 font-semibold mt-2' >{name} </h1>
        <p  className='ml-6 mt-2 font-mono font-medium' > Pkr {price}</p>




    </div>
  )
}

export default MenuItems