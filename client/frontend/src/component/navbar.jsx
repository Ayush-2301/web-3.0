import React from 'react'
import logo from "../asset/logo.png"

const Navbar = () => {
  return (
    <div className='container mx-auto  flex text-white justify-between '>
      <div className='logo p-4 ml-24'>
        <img src={logo} alt="" width={60} />
      </div>
      <div className='p-5 mt-4 mr-24 text-xl font-poppins text-gray-300' >
        <ul className='space-x-10 flex'>
          <li className='hover:cursor-pointer'><a href={`https://goerli.etherscan.io/`}>EtherScan</a></li>
          <li className='hover:cursor-pointer'> Contact</li>
          <li className='hover:cursor-pointer'> Details</li>
          <li className='hover:cursor-pointer'>Get started</li>
        </ul>
      </div>
    </div>

  )
}

export default Navbar