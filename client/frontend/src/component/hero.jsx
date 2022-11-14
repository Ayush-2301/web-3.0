import React from 'react'
const input=(placeholder)=>(
  <input placeholder={placeholder}>
  
  </input>

);
const Hero = () => {
  return (
    <div className='container mx-auto font-poppins flex flex-row justify-evenly items-center m-10 '>
      <div className='flex flex-col text-5xl items-center text-gradient'>
        <p className='inline w-[340px] font-semibold'>Send Transaction Through the Blockchain</p>
        <button className=' bg-[rgb(116,32,96)] text-gray-300 font-medium p-2 px-4 m-3 w-full text-2xl rounded-full'>Connect Wallet</button>
      </div>
      <div className='m-5'>
        <div className='w-[400px] h-[200px] rounded-xl eth-card p-2 text-white flex flex-col justify-between'>
          <div className=' border-2 rounded-full w-fit h-fit p-1 px-3'>
            <i class="fa-brands fa-ethereum text-2xl "></i>
          </div>
          <p className='m-2 ml-1'>Address :</p>
        </div>
        <div className='blue-glassmorphism w-full p-5 my-3'>
          <input type="text" placeholder='Address' name='AddressTo' className='w-full placeholder:p-2 rounded-' />
        </div>
      </div>
        
    </div>
  )
}

export default Hero