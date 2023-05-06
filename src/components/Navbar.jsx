import React from 'react'
import {Link} from 'react-router-dom'
import {styles} from '../styles'
import {navLinks}from '../constants'
import { menu, close } from '../assets'

const Navbar = () => {

  const [active, setActive] = React.useState('')
  return (
    <nav className={`${styles.paddingX} w-full flex items-center fixed top-0 z-20 py-5`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2' onClick={() => {setActive(""); window.scrollTo(0,0)}}>
          <img src='ernest_dev.png' alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-2xl'>Enerst Mubz | <span>Dev</span></p>
        </Link>
      </div>
    </nav>
  )
} 

export default Navbar