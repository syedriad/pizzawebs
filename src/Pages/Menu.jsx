import React from 'react'
import { MenuList } from '../Helpers/MenuList'
import MenuItems from '../Components/MenuItems'

function Menu() {
  return (
    <div className='w-full h-auto flex justify-center items-center flex-col ' >

        <h1 className='sm:text-6xl text-2xl font-bold font-mono mt-8   ' >Our Menu</h1>


        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-x-3 mx-auto w-full p-8   ' >
            {MenuList.map((menuItems, key)=> {
                return <MenuItems  image={menuItems.image} name={menuItems.name} price={menuItems.price} key={key} />
            } )}


        </div>





    </div>
  )
}

export default Menu