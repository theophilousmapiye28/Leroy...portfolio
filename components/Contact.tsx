


// "use client";

// import React, { useState } from 'react';
// import Image from 'next/image';
// import icon1 from '../public/images/conta/Vector (7).png';
// import icon2 from '../public/images/conta/Group 4.png';
// import icon3 from '../public/images/conta/Vector (8).png';
// import icon4 from '../public/images/conta/Vector (9).png';
// import icon6 from '../public/images/conta/Vector (10).png';
// import icon5 from '../public/images/conta/Vector (11).png';

// const Contact = () => {
//   const [loading, setLoading] = useState(false); // Loading state
//   const [notification, setNotification] = useState(null); // Notification state

//   async function handleSubmit(event) {
//     event.preventDefault();
//     setLoading(true); // Show the loading state
//     setNotification(null); // Reset any previous notification

//     const formData = new FormData(event.target);
//     formData.append("access_key", "833c9587-86da-471c-8aec-f08968d850a5");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: json,
//       });

//       const result = await response.json();

//       if (result.success) {
//         setNotification('Success! Your message has been sent.');
//         event.target.reset(); // Clear form fields on success
//       } else {
//         setNotification('Error! Please try again.');
//       }
//     } catch (error) {
//       setNotification('Error! Please try again.');
//     }

//     setLoading(false); // Hide the loading state
//   }

//   return (
//     <div className=''>
//       <div className='min-h-[60vh] bg-black flex items-center justify-center' id='contact'>
//         <div className='flex flex-row pl-10 flex-wrap w-full justify-evenly px-5'>
//           {/* Contact Information Section */}
//           <div className='flex flex-col pr-[200px] pb-5 w-full md:w-auto'>
//             <h2 className='text-4xl font-bold text-white font-chillax underline'>Contact</h2>
           
//             <a className='text-white p-5' href="tel:+263785651863">
//               <Image className='rounded-md inline-block' src={icon1} alt="" /> +263 785 651 863
//             </a>
//             <a className='text-white p-5' href="mailto:leroygutu696@gmail.com">
//               <Image className='rounded-md inline-block' src={icon2} alt="" /> leroygutu696@gmail.com
//             </a>
//             <div className='flex flex-row p-5 justify-around'>
//               <Image src={icon3} alt="" />
//               <a href="http://www.linkedin.com/in/leroy-gutu-4770462b8">
//                 <Image src={icon4} alt="" />
//               </a>
//               <Image src={icon6} alt="" />
//               <a href="tel:+263785651863">
//                 <Image src={icon5} alt="" />
//               </a>
//             </div>
//             <a href="c:\Users\UncommonStudent\Downloads\Leroy Gutu CV Resume (1).pdf" >
//   <button className='bg-blue rounded-md p-2 flex items-center text-white justify-center w-[20vh] active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all'>
//     Download CV
//   </button>
// </a>


//             {/* <a href="c:\Users\UncommonStudent\Downloads\Leroy Gutu CV Resume (1).pdf"><button className='bg-blue rounded-md p-2 flex items-center text-white justify-center w-[20vh] active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all'>
//               Download CV
//             </button></a> */}
//           </div>

//           {/* Form Section */}
//           <div className='form w-full md:w-auto'>
//             <form onSubmit={handleSubmit} className='flex flex-col'>
//               <input
//                 className='h-[8vh] w-full md:w-[160%] p-3 bg-gray text-white rounded-sm m-2'
//                 type='text'
//                 name='name'
//                 placeholder='Your Name'
//                 required
//               />
//               <input
//                 className='h-[8vh] w-full md:w-[160%] p-3 bg-gray text-white rounded-sm m-2'
//                 type='email'
//                 name='email'
//                 placeholder='Your Email'
//                 required
//               />
//               <textarea
//                 className='h-[30vh] w-full md:w-[160%] p-3 bg-gray text-white rounded-sm m-2'
//                 name='message'
//                 placeholder='Message'
//                 required
//               ></textarea>
//               <button
//                 className='bg-blue rounded-md p-2 flex items-center text-white justify-center w-[20vh] active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all'
//                 type="submit"
//                 disabled={loading} // Disable button while loading
//               >
//                 {loading ? 'Please wait...' : 'Submit'}
//               </button>
//             </form>

//             {/* Notification */}
//             {notification && (
//               <p className={`mt-4 ${notification.startsWith('Success') ? 'text-green-500' : 'text-red-500'}`}>
//                 {notification}
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default Contact;



// "use client";

// import React, { useState } from 'react';
// import Image from 'next/image';
// import icon1 from '../public/images/conta/Vector (7).png';
// import icon2 from '../public/images/conta/Group 4.png';
// import icon3 from '../public/images/conta/Vector (8).png';
// import icon4 from '../public/images/conta/Vector (9).png';
// import icon6 from '../public/images/conta/Vector (10).png';
// import icon5 from '../public/images/conta/Vector (11).png';

// const Contact = () => {
//   const [loading, setLoading] = useState(false); // Loading state
//   const [notification, setNotification] = useState<string | null>(null); // Notification state

//   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     setLoading(true); // Show the loading state
//     setNotification(null); // Reset any previous notification

//     const formData = new FormData(event.target as HTMLFormElement);
//     formData.append("access_key", "833c9587-86da-471c-8aec-f08968d850a5");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: json,
//       });

//       const result = await response.json();

//       if (result.success) {
//         setNotification('Success! Your message has been sent.');
//         event.target.reset(); // Clear form fields on success
//       } else {
//         setNotification('Error! Please try again.');
//       }
//     } catch (error) {
//       setNotification('Error! Please try again.');
//     }

//     setLoading(false); // Hide the loading state
//   }

//   return (
//     <div className=''>
//       <div className='min-h-[60vh] bg-black flex items-center justify-center' id='contact'>
//         <div className='flex flex-row pl-10 flex-wrap w-full justify-evenly px-5'>
//           {/* Contact Information Section */}
//           <div className='flex flex-col pr-[200px] pb-5 w-full md:w-auto'>
//             <h2 className='text-4xl font-bold text-white font-chillax underline'>Contact</h2>
           
//             <a className='text-white p-5' href="tel:+263785651863">
//               <Image className='rounded-md inline-block' src={icon1} alt="" /> +263 785 651 863
//             </a>
//             <a className='text-white p-5' href="mailto:leroygutu696@gmail.com">
//               <Image className='rounded-md inline-block' src={icon2} alt="" /> leroygutu696@gmail.com
//             </a>
//             <div className='flex flex-row p-5 justify-around'>
//               <Image src={icon3} alt="" />
//               <a href="http://www.linkedin.com/in/leroy-gutu-4770462b8">
//                 <Image src={icon4} alt="" />
//               </a>
//               <Image src={icon6} alt="" />
//               <a href="tel:+263785651863">
//                 <Image src={icon5} alt="" />
//               </a>
//             </div>
//             <a href="c:\Users\UncommonStudent\Downloads\Leroy Gutu CV Resume (1).pdf" >
//               <button className='bg-blue rounded-md p-2 flex items-center text-white justify-center w-[20vh] active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all'>
//                 Download CV
//               </button>
//             </a>
//           </div>

//           {/* Form Section */}
//           <div className='form w-full md:w-auto'>
//             <form onSubmit={handleSubmit} className='flex flex-col'>
//               <input
//                 className='h-[8vh] w-full md:w-[160%] p-3 bg-gray text-white rounded-sm m-2'
//                 type='text'
//                 name='name'
//                 placeholder='Your Name'
//                 required
//               />
//               <input
//                 className='h-[8vh] w-full md:w-[160%] p-3 bg-gray text-white rounded-sm m-2'
//                 type='email'
//                 name='email'
//                 placeholder='Your Email'
//                 required
//               />
//               <textarea
//                 className='h-[30vh] w-full md:w-[160%] p-3 bg-gray text-white rounded-sm m-2'
//                 name='message'
//                 placeholder='Message'
//                 required
//               ></textarea>
//               <button
//                 className='bg-blue rounded-md p-2 flex items-center text-white justify-center w-[20vh] active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all'
//                 type="submit"
//                 disabled={loading} // Disable button while loading
//               >
//                 {loading ? 'Please wait...' : 'Submit'}
//               </button>
//             </form>

//             {/* Notification */}
//             {notification && (
//               <p className={`mt-4 ${notification.startsWith('Success') ? 'text-green-500' : 'text-red-500'}`}>
//                 {notification}
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;



"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import icon1 from '../public/images/conta/Vector (7).png';
import icon2 from '../public/images/conta/Group 4.png';
import icon3 from '../public/images/conta/Vector (8).png';
import icon4 from '../public/images/conta/Vector (9).png';
import icon6 from '../public/images/conta/Vector (10).png';
import icon5 from '../public/images/conta/Vector (11).png';

const Contact = () => {
  const [loading, setLoading] = useState(false); // Loading state
  const [notification, setNotification] = useState<string | null>(null); // Notification state

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true); // Show the loading state
    setNotification(null); // Reset any previous notification

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "833c9587-86da-471c-8aec-f08968d850a5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setNotification('Success! Your message has been sent.');
        (event.target as HTMLFormElement).reset(); // Cast to HTMLFormElement to clear form fields on success
      } else {
        setNotification('Error! Please try again.');
      }
    } catch (error) {
      setNotification('Error! Please try again.');
    }

    setLoading(false); // Hide the loading state
  }

  return (
    <div className=''>
      <div className='min-h-[60vh] bg-black flex items-center justify-center' id='contact'>
        <div className='flex flex-row pl-10 flex-wrap w-full justify-evenly px-5'>
          {/* Contact Information Section */}
          <div className='flex flex-col pr-[200px] pb-5 w-full md:w-auto'>
            <h2 className='text-4xl font-bold text-white font-chillax underline'>Contact</h2>
           
            <a className='text-white p-5' href="tel:+263785651863">
              <Image className='rounded-md inline-block' src={icon1} alt="" /> +263 785 651 863
            </a>
            <a className='text-white p-5' href="mailto:leroygutu696@gmail.com">
              <Image className='rounded-md inline-block' src={icon2} alt="" /> leroygutu696@gmail.com
            </a>
            <div className='flex flex-row p-5 justify-around'>
              <Image src={icon3} alt="" />
              <a href="http://www.linkedin.com/in/leroy-gutu-4770462b8">
                <Image src={icon4} alt="" />
              </a>
              <Image src={icon6} alt="" />
              <a href="tel:+263785651863">
                <Image src={icon5} alt="" />
              </a>
            </div>
            <a href="c:\Users\UncommonStudent\Downloads\Leroy Gutu CV Resume (1).pdf" >
              <button className='bg-blue rounded-md p-2 flex items-center text-white justify-center w-[20vh] active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all'>
                Download CV
              </button>
            </a>
          </div>

          {/* Form Section */}
          <div className='form w-full md:w-auto'>
            <form onSubmit={handleSubmit} className='flex flex-col'>
              <input
                className='h-[8vh] w-full md:w-[160%] p-3 bg-gray text-white rounded-sm m-2'
                type='text'
                name='name'
                placeholder='Your Name'
                required
              />
              <input
                className='h-[8vh] w-full md:w-[160%] p-3 bg-gray text-white rounded-sm m-2'
                type='email'
                name='email'
                placeholder='Your Email'
                required
              />
              <textarea
                className='h-[30vh] w-full md:w-[160%] p-3 bg-gray text-white rounded-sm m-2'
                name='message'
                placeholder='Message'
                required
              ></textarea>
              <button
                className='bg-blue rounded-md p-2 flex items-center text-white justify-center w-[20vh] active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all'
                type="submit"
                disabled={loading} // Disable button while loading
              >
                {loading ? 'Please wait...' : 'Submit'}
              </button>
            </form>

            {/* Notification */}
            {notification && (
              <p className={`mt-4 ${notification.startsWith('Success') ? 'text-green-500' : 'text-red-500'}`}>
                {notification}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
