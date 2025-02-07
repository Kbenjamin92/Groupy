import { Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { MotionButtonType } from '@/interfaces';

const MotionButton = motion.create(Button);

export const GroupyButton: React.FC<MotionButtonType> = ({ children }) => {

  return (
    <MotionButton
        whileTap={{ scale: 0.9 }} 
        whileHover={{ scale: 1.1, outline: 'none', border: 'none' }}
        outline='none'
        type='submit'
        bg='dodgerblue' 
        >
        { children }
    </MotionButton>
  )
}
