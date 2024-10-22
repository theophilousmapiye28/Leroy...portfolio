
import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className='home flex flex-col h-[100vh]  ' id='hero'>
        <p className="text-lg   sm:text-xl md:text-4xl pb-2 font-chillax">Digital Market</p>
        <h3 className='text-4xl sm:text-6xl md:text-6xl font-chillax'>
          Hi, Im <span className="text-primary text-blue font-chillax pb-4	">Leroy Gutu</span> <br />
          
        </h3>
        <h3 className='text-4xl sm:text-6xl md:text-6xl font-chillax'>From Harare, Zimbabwe</h3>
        <div className='hr bg-gray-500 w-full sm:w-3/4 md:w-1/2 mt-4'></div>
      </div>
    </div>
  )
}

export default Hero
