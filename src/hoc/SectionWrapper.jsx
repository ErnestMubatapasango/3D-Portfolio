import {motion} from 'framer-motion'
import {styles} from '../styles'
import { staggerContainer } from '../utils/motion'
import { Component } from 'react'

const SectionWrapper =( Component, idName) => function HOC() {
    return(
        <motion.section>
            <Component/>
        </motion.section>
    )
}