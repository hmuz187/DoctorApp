import React from 'react'
//import components ...
import {logo} from '../../../assets/images/index';
import Nav from './Nav';
import NavMobile from './NavMobile';
const Header = () => {
  return (
    <div className='relative scroll-smooth h-[50px]'>
      <header className='active  p-4 lg:px-0 w-full fixed z-10 transition-all duration-300 bg-[#1F1B4A]'>
        <div className='container mx-auto flex items-center justify-between'>
          <a href="/"><img className='h-[50px] ' src={logo} alt="logo-img" /></a>
          <Nav />
          <NavMobile />
        </div>
      </header>

    </div>
  )
}

export default Header