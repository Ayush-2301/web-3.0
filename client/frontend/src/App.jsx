import React from 'react'
import './index.css'
import { Navbar ,Hero,Footer,Transcation } from './component'
const App = () => {
  return (
    <div className='back min-h-screen container mx-auto border-solid border-white -4 border-b-0'>
        <Navbar/>
        <Hero/>
        <Transcation/>
        
        <Footer/>
        
    </div>
  )
}

export default App