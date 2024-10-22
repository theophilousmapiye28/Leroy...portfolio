import React from 'react'

const Navbar = () => {
  return (
    <div>
    <header class="header">
		<div class="container">
			<a href="#hero"  class="logo font-chillax">Leroy</a>
			<input class="menu-btn" type="checkbox" id="menu-btn"/> 
			<label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
			<ul class="menu font-chillax">
				<li><a href="#hero" class="active text-md" className=' text-xl hover:text-black-500'>Home</a></li>
				<li><a href="#about" className='active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all text-lg'>About </a></li>
				<li><a href="#services" className='active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all text-lg'>Services</a></li>
				<li><a href="#contact" className='active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all text-lg'>Contact</a></li>
        <li><a href="#portfolio" className='active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all text-lg'>Portfolio</a></li>
			</ul>
		</div>
		
	</header>
    </div>
  )
}

export default Navbar
