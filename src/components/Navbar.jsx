import React from 'react'
import {Link} from 'react-router-dom'
import {styles} from '../styles'
import {navLinks}from '../constants'
import { menu, close } from '../assets'

const Navbar = () => {

  const [active, setActive] = React.useState('')
  const [toggleMenu, setToggleMenu] = React.useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center fixed top-0 z-20 py-5`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2' onClick={() => {setActive(""); window.scrollTo(0,0)}}>
          <img src='ernest_dev.png' alt='logo' className='w-14 h-14 object-contain' />
          <p className='text-white text-[18px] font-medium flex'>Enerst Mubz&nbsp;<span className='sm:block hidden text-slate-400 font-medium'>| Dev</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li 
              key={link.id} 
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
              >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
            {/**Mobile Navigation */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img 
              src={toggleMenu ? menu : close} 
              alt='menu'
              className='w-[20px] h-[20px] object-contain cursor-pointer'
              onClick={() => setToggleMenu(!toggleMenu)}
            />
            <div className={`${!toggleMenu ? 'flex':'hidden'} p-6 black-gradient absolute top-20 right-0 min-w-[150px] mx-5 my-2 rounded-xl`}>
            <ul className='list-none flex flex-col gap-4'>
              {navLinks.map((link) => (
                <li 
                  key={link.id} 
                  className={`${active === link.title ? "text-white" : "text-secondary"} 
                  hover:text-white text-[16px] font-medium cursor-pointer font-poppins`}
                  onClick={() => {
                    setToggleMenu(!toggleMenu)
                    setActive(link.title)}}
                  >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
            </div>
        </div>
      </div>
    </nav>
  )
} 

export default Navbar