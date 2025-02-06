import { useForm, SubmitHandler,  } from 'react-hook-form'
import { Text, 
    Box, 
    Input, 
    Button,
    Heading, 
    Stack } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import { GroupType } from '@/interfaces';
import { FaArrowRightLong } from "react-icons/fa6";
import { GroupyTitle } from './GroupyTitle';

const MotionButton = motion.create(Button)

export const GroupCreation = () => {
    const { register, handleSubmit } = useForm<GroupType>()
    const mess = localStorage.getItem("message")
  return (
    <>
      <Box 
        display='flex'
        justifyContent='center'
        alignItems='center'
        minH="100vh"
        minW="100vw"
      >
        <Box
          boxShadow='md'
          borderRadius='5px'
          padding='60px'
        >
        <GroupyTitle />
        <Box>
          <form>
            <Stack gap={5}>
            <Box 
              display='flex'
              justifyContent='flex-start'
            >
              <Text fontSize='xl'>{ mess }</Text>
            </Box>
              <Input 
                placeholder="What's the name of your group?"
                variant='subtle'
                w='25rem'
                { ...register('groupName') }
                />
                <Box
                  display='flex'
                  justifyContent='flex-start'
                  alignItems='flex-start'
                  gap={3}
                >
                  <MotionButton
                      whileTap={{ scale: 0.9 }} 
                      whileHover={{ scale: 1.1 }}
                      outline='none'
                      type='submit'
                      bg='dodgerblue' 
                  >
                    <FaArrowRightLong />
                      Create Group
                  </MotionButton>
                </Box>
            </Stack>
          </form>
        </Box>
        </Box>
      </Box>
      
    </>
  )
}
