import React from 'react'
import logo from "../asset/logo.png"
import ItemsContainer from './ItemsContainer'
import SocialIcons from './SocialIcons'
import {Icons} from './Menus.js'
const Footer = () => {
  return (
    <div className=' bg-gray-900 text-white '>
      <div className='md:flex md:justify-between md:items-center sm:px-12 px-4  py-7'>
        <div className='logo p-4 ml-24'>
          <img src={logo} alt="" width={60} />
          </div>
        <div>
          <input type="text" placeholder='Drop your email!' className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 
          py-2.5 rounded px-2 focus:outline-none' >
          </input>
          <button className='bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-poppins 
          rounded-md text-white'>
            Subscribe Now!
          </button>
        </div>
        <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold 
        md:w-2/5'>
          <span className='text-teal-400 font-poppins '>Take the</span> <span className='text-[rgb(116,32,96)] font-poppins '>Leap</span>
          </h1>

      </div>
      <ItemsContainer/>
       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8'>
        <SocialIcons Icons ={Icons}  />
      </div> 
    </div>
  )
}

export default Footer