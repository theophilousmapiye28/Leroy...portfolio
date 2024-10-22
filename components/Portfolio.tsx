import React from 'react'
import Image from 'next/image'
import pro1 from '../public/images/Rectangle 39.png'
import pro2  from '../public/images/Rectangle 40.png'
import pro3 from '../public/images/Rectangle 41.png'
import pro4 from  '../public/images/Rectangle 45 (1).png'
import pro5 from '../public/images/Rectangle 45 (2).png'
import pro6 from '../public/images/Rectangle 45.png'

const Portfolio = () => {
  return (
    <div className='flex flex-col bg-black justify-center pt-10  min-h-[100vh]' id='portfolio'>
        <div className='flex flex-col p-10  min-h-[30vh] min-width-[90vh]'>
        <div className='flex flex-col items-start'>
  <h1 className='text-4xl text-white ml-[13vh] underline font-chillax'>Portfolio</h1>

</div>

      <div className='flex flex-row flex-wrap items-center justify-center'>
<Image className='p-1 active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all' src={pro1} alt="" />
<Image className='p-1 active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all' src={pro2} alt="" />
<Image className='p-1 active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all' src={pro3} alt="" />
<Image className='p-1 active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all' src={pro4} alt="" />
<Image className='p-1 active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all' src={pro5} alt="" />
<Image className='p-1 active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all' src={pro6} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Portfolio
