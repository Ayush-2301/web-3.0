import React from "react";
import Loader from "./loader";

const UserInput=({ placeholder, name, type, value, handleChange })=>(
  <input 
    placeholder={placeholder} 
    type={type}
    step="0.00001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-md p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);
const Hero = () => {

  const handleSubmit = () => {

  }

  return (
    <div className='container mx-auto font-poppins flex flex-row justify-evenly items-center m-10 '>
      <div className='flex flex-col text-5xl items-center text-gradient'>
        <p className='inline w-[340px] font-semibold'>Send Transaction Through the Blockchain</p>
        <button className=' bg-[rgb(116,32,96)] text-gray-300 font-medium p-2 px-4 m-3 w-full text-2xl rounded-full'>Connect Wallet</button>
      </div>
      <div className='m-5'>
        <div className='w-[400px] h-[200px] rounded-xl eth-card p-2 text-white flex flex-col justify-between'>
          <div className=' border-2 rounded-full w-fit h-fit p-1 px-3'>
            <i className="fa-brands fa-ethereum text-2xl "></i>
          </div>
          <p className='m-2 ml-1'>Address :</p>
        </div>
        <div className='blue-glassmorphism w-full p-5 my-3'>
          <UserInput placeholder="Address" name="addressTo" type="text" handleChange={() => {}}/>
          <UserInput placeholder="Amount (ETH)" name="amount" type="number" handleChange={() => {}}/>
          <UserInput placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={() => {}}/>
          <UserInput placeholder="Enter Message" name="message" type="text" handleChange={() => {}}/>

          <div className="h-[1px] w-full bg-gray-400 my-2" />

          {false ? (
            <Loader />
          ) : (
            <button 
            type="button"
            onClick={handleSubmit}
            className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
            >
              Send Now
            </button>
          )}

        </div>
      </div>
        
    </div>
  )
}

export default Hero