import { motion } from 'framer-motion'
import {Tilt} from 'react-tilt' //helps with tilting the about components
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className="xs:w-[180px] w-full">
      <motion.div 
      variants={fadeIn("right","spring",0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options = {{
            max:45,
            scale:1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] min-h-[250px] flex justify-evenly items-center flex-col px-12 py-5'
        >
          <img 
          src={icon} 
          alt={title}
          className='w-16 h-16 object-contain' 
          />
          <h3 className='text-white text-center text-[16px]'>{title}</h3>
        </div>
     
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      {/**the fade in variant takes in 4 parameters namely direction type delay duration  */}
      <motion.p variants={fadeIn("","",0.1,1)} className='text-secondary text-[15px] max-w-3xl leading-[25px] '>
        I&apos;m a skilled software developer with experience in JavaScript and expertise in frameworks
        like React.js and Next.js. I have a strong understanding of building scalable and efficient web applications. I
        possess a keen eye for detail and can efficiently translate designs mockups into functional, user-friendly interfaces. My 
        passion for coding and eagerness to learn new technologies allows me to adapt to any project&apos;s needs seamlessly. I am a team 
        player, and l thrive in collaborative environments, where l can work with like-minded professionals to deliver high-quality, 
        cutting-edge solutions. If you are looking for a dedicated and skilled React and Next.js developer, look no further.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")