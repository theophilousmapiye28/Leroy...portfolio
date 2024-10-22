
import React from 'react'
import Image from 'next/image'
import  on1 from '../public/images/service icons/Storey.png'
import  on2 from '../public/images/service icons/Responsive.png'
import on3 from '../public/images/service icons/Multichannel.png'
import on4  from '../public/images/service icons/Dressing Table.png'
import on5 from '../public/images/service icons/Books (1).png'
import on6 from '../public/images/service icons/Paint Palette.png'

const Services = () => {
  return (
    <div className='flex flex-col bg-black pt-[10vh] p-5' id='services'>
     <div className='flex flex-col items-start'>
  <h1 className='pl-0 sm:pl-5 lg:pl-[25vh] text-white text-4xl underline font-chillax'>
    My Services
  </h1>


</div>

      <div className='flex flex-wrap items-center justify-center p-5'>
        {/* Card 1 */}
        <div className='flex flex-col justify-center  bg-gray h-[40vh] w-[90vw] sm:w-[45vh] rounded-lg  m-2 p-3 active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all'>
          <Image src={on1} alt="" />
          <h3 className='text-xl text-white font-chillax pb-1'>Digital Marketing</h3>
          <p className='text-sm  text-white'>
            Strategically promoting products or services through online channels.
          </p>
        </div>

        {/* Card 2 */}
        <div className='flex flex-col justify-center bg-gray h-[40vh] w-[90vw] sm:w-[45vh] rounded-lg  m-2 p-3 active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all'>
        <Image src={on2} alt="" />
          <h3 className='text-xl text-white font-chillax pb-1'>Social Media Management</h3>
          <p className='text-sm text-white'>
          “Execute targeted social media campaigns to boost brand visibility, engage audiences, and drive interactions through strategic content and optimized posting schedules.”
          </p>
        </div>

        {/* Card 3 */}
        <div className='flex flex-col justify-center bg-gray h-[40vh] w-[90vw] sm:w-[45vh] rounded-lg  m-2 p-3 active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all'>
        <Image src={on3} alt="" />
          <h3 className='text-xl font-chillax text-white pb-1'>Search Engine  Optimization</h3>
          <p className='text-sm  text-white'>
          “Execute keyword research, optimize on-page and off-page SEO, generate analytic reports, and
           conduct website audits to enhance search engine visibility and performance.”
          </p>
        </div>

        {/* Card 4 */}
        <div className='flex flex-col justify-center bg-gray h-[40vh] w-[90vw] sm:w-[45vh] rounded-lg  m-2 p-3 active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all'>
        <Image src={on4} alt="" />
          <h3 className='text-xl text-white font-chillax pb-1'>Email Marketing</h3>
          <p className='text-sm  text-white'>
          “Create and manage email marketing campaigns
           to attract traffic, capture leads, and enhance brand visibility.”
          </p>
        </div>

        {/* Card 5 */}
        <div className='flex flex-col justify-center bg-gray h-[40vh] w-[90vw] sm:w-[45vh] rounded-lg  m-2 p-3 active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all'>
        <Image src={on5} alt="" />
          <h3 className='text-xl text-white font-chillax pb-1'>Content Marketing</h3>
          <p className='text-sm  text-white'>
          “Produce engaging content, including blog posts, articles,
           and website copy, to attract traffic and increase conversions.”
          </p>
        </div>

        {/* Card 6 */}
        <div className='flex flex-col justify-center bg-gray h-[40vh] w-[90vw] sm:w-[45vh] rounded-lg  m-2 p-3 active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all'>
        <Image src={on6} alt="" />
          <h3 className='text-xl font-chillax text-white pb-1'>UX/UI Design   </h3>
          <p className='text-sm  text-white'>
          I specialize in crafting user-centered, visually appealing
           designs that enhance digital experiences.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services

