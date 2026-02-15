import React from 'react'

const Marque =()=>{

  return (
    <div className="w-full relative bg-gradient-to-b from-white to-[#F5F1EB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 flex flex-col lg:flex-row items-center gap-10">

        <div className="lg:w-1/2">
        
        <div className="w-24 h-1 bg-[#C9A24D] rounded-full mb-6"></div>
        
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-[#C9A24D] drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
        “We've got custom T-shirts in a range of fits and sizes, so everyone can wear your brand or message.”
        </h2>
        
        <p className="mt-6 text-lg md:text-xl text-[#4A4A4A]">
        Luxury fabrics, premium prints, and perfect fit for every style.
        </p>
        </div>
        
        <div className="lg:w-1/2 flex flex-col items-center gap-8">
        
        
        <div className="flex gap-6">
        <img
        src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNoaXJ0fGVufDB8fDB8fHww"
        className="rounded-xl h-64 w-80 object-cover shadow-lg"
        alt="Luxury shirt"
        />
        <img
        src='https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dCUyMHNoaXJ0JTIwbW9ja3VwfGVufDB8fDB8fHww'
        className="rounded-xl h-64 w-80 object-cover shadow-lg"
        alt="Luxury shirt"
        />
        </div>
        {/* One centered image below */}
        <img
        src='https://images.unsplash.com/photo-1657364891013-8324e4db9dc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjB0JTIwc2hpcnQlMjBtb2NrdXB8ZW58MHx8MHx8fDA%3D'
        className="rounded-xl h-64 w-80 object-cover shadow-lg mt-4"
        alt="Luxury shirt"
        />
        
        </div>
        
        </div>
        </div>
      )
      }
      
      
      export default Marque
      