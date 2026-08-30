"use client"

import { fadeIn } from '@/utils/motion_transitions'
import { motion } from 'framer-motion'

interface MotionTransiotionProps {
  children: React.ReactNode,
  position: 'right' | 'bottom';
  className?: string
}

export const MotionTransition = (props: MotionTransiotionProps)=> {
  const { children, position, className } = props
  return (
    <motion.div
      variants={fadeIn(position)}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={className}
    >
      {children}
    </motion.div>
  );
}
