import React, { useRef } from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef()
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: ""
  })

const [loading, setLoading] = React.useState(false)

function handleChange(){
   
  }

function handleSubmit(event){
  event.preventDefault()
}
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
       variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='flex flex-col mt-12 gap-8'
        >
          <label
            className='flex flex-col'
          >
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              name='name'
              type='text'
              value={formData.name}
              onChange={handleChange}
              placeholder='What&apos;s your name'
              className='indent-2 py-2 px-3 rounded-lg text-white text-[14px] bg-tertiary focus:outline-none'
            />
          </label>

          <label
            className='flex flex-col'
          >
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
              name='email'
              type='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='What&apos;s your email'
              className='indent-2 py-2 px-3 rounded-lg text-white text-[14px] bg-tertiary focus:outline-none'
            />
          </label>

          <label
            className='flex flex-col'
          >
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea 
              rows={7}
              name='message'  
              value={formData.message}
              onChange={handleChange}
              placeholder='How can l help?'
              className='indent-2 py-2 px-3 rounded-lg text-white text-[14px] bg-tertiary focus:outline-none'
            />
          </label>

          <button type='submit' className='bg-tertiary rounded-lg py-2 px-4 inset-2 cursor-pointer focus:outline-none w-fit' >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas /> 
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")