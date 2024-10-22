

// import React from 'react'
// import Image from 'next/image'
// import one from '@/public/images/about font (698).png'

// const About = () => {
//   return (
//     <div className='about bg-white min-h-[80vh] px-4 md:px-8 lg:px-16'> 
//       <h1 className='text-center text-black text-3xl md:text-4xl lg:text-5xl mt-10 font-bold'>About Me</h1>
        
//       <div className='flex  md:flex-col flex-wrap items-center justify-center gap-10 mt-10'> 
//         <div className='w-full md:w-1/2'>
//           <Image className='h-[50vh] md:h-[60vh] w-full object-cover' src={one} alt="About Me Image" />
//         </div>
//         <div className='w-full md:w-1/2 flex flex-col space-y-6'>
//           <p className='text-base md:text-lg leading-relaxed'>
//             I'm Leroy Gutu, a dedicated Digital Marketer with a passion for leveraging data-driven strategies to enhance brand visibility and drive business growth.
//           </p>
//           <p className='text-base md:text-lg leading-relaxed'>
//             My expertise spans across SEO, PPC, social media marketing, and content creation, allowing me to create and implement effective campaigns that resonate with target audiences.
//           </p>
//           <p className='text-base md:text-lg leading-relaxed'>
//             With a knack for innovation and a keen eye for detail, I continuously explore new trends and technologies to stay ahead in the ever-evolving digital landscape. My goal is to help businesses not only meet but exceed their marketing objectives through creative and impactful digital solutions.
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default About

import React from 'react'
import Image from 'next/image'
import one from '@/public/images/contact/fONT(721).png'

const About = () => {
  return (
    <div className='about bg-black min-h-[80vh pt-[20vh]  px-4 md:px-8 lg:px-16' id='about'>
    

      <div className='about-content  flex md:flex-row items-center justify-center   gap-4'>
        
        <div className='w-full lg:w-1/2'>
          <Image className='h-[80vh] pt-10  w-[70%] ' src={one} alt="About Me Image" />
        </div>
        
        <div className='flex flex-col justify-start w-full lg:w-1/2 space-y-6'>
        <h1 className=' inline-block text-white text-3xl  md:text-4xl lg:text-5xl mt-10 font-bold  font-chillax'>About Me</h1>
          <p className='text-base text-white md:text-lg leading-relaxed  '>
            Im Leroy Gutu, a dedicated Digital Marketer with a passion for leveraging data-driven strategies to enhance brand visibility and drive business growth.
          </p>
          <p className='text-base text-white md:text-lg leading-relaxed'>
            My expertise spans across SEO, PPC, social media marketing, and content creation, allowing me to create and implement effective campaigns that resonate with target audiences.
          </p>
          <p className=' text-white md:text-lg leading-relaxed'>
            With a knack for innovation and a keen eye for detail, I continuously explore new trends and technologies to stay ahead in the ever-evolving digital landscape. My goal is to help businesses not only meet but exceed their marketing objectives through creative and impactful digital solutions.
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default About
