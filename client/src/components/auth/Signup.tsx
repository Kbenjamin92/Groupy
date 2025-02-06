import { useForm, SubmitHandler, FieldErrors } from 'react-hook-form'
import { UserSignupType } from '@/interfaces'
import { Link } from 'react-router-dom'
import { 
  Input, 
  Stack, 
  Button, 
  Heading, 
  Text, 
  Box } from '@chakra-ui/react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaShareNodes } from "react-icons/fa6";
import { useRegister } from '@/hooks/useRegister'
import { motion } from 'framer-motion'

const MotionButton = motion.create(Button)

export const Signup = () => {
  const { createNewUser } = useRegister();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<UserSignupType>();

  const onSubmit: SubmitHandler<UserSignupType> = (data) => {
    createNewUser(data);
    reset({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: ''
    });

  }

  return (
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
        <Box
            display='flex'
            justifyContent='center'
            h="120px"
          >
          <Stack direction='row'>
            <FaShareNodes size={60} color='dodgerblue' />
            <Heading as="h1">Groupy</Heading>
          </Stack>
        </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={4}>
          <Box 
            display='flex'
            justifyContent='flex-start'
            >
            <Heading as='h1'>Sign up</Heading>
          </Box>
          <Input 
            placeholder='First name'
            variant='subtle'
            w='25rem'
            {...register('firstName', { required: 'First name is required'})} />
            { errors.firstName && <Text color='crimson'>{ errors.firstName?.message }</Text>}
          <Input 
            placeholder='Last name'
            variant='subtle'  
            {...register('lastName', { required: 'Last name is required'})}/>
            { errors.lastName && <Text color='crimson'>{ errors.lastName?.message }</Text>}
          <Input 
            placeholder='Email'
            variant='subtle' 
            {...register('email', { required: 'Email is required'})}/>
            { errors.email && <Text color='crimson'>{ errors.email?.message }</Text>}
          <Input 
            placeholder='Username'
            variant='subtle' 
            {...register('username', { required: 'Username is required'})}/>
            { errors.username && <Text color='crimson'>{ errors.username?.message }</Text>}
          <Input 
            placeholder='Password'
            variant='subtle' 
            {...register('password', { required: 'Password is required'})}/>
            { errors.password && <Text color='crimson'>{ errors.password?.message }</Text>}
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
                Sign up</MotionButton>
              <Text>Already a member?</Text>
              <Link to='/login'>Login</Link>
          </Box>
            </Stack>
      </form>
      
      </Box>
    </Box>
  )
}
