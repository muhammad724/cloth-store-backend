import React from 'react'
import bgImage from "../assets/bg2.png"

const BgImage2 = () => {
  return (
    <>
   <div className=" h-screen w-full">
    
  {/* Background Image */}
  <img
    src={bgImage}
    alt="Luxury fashion"
    className="absolute inset-0 h-full w-full object-cover"
    />
  
    </div>
    </>
  )
}

export default BgImage2