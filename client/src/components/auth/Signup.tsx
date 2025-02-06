import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
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

export const Signup = () => {
  const { register, handleSubmit } = useForm<UserSignupType>();


  return (
    <Box 
      display='flex'
      justifyContent='center'
      alignItems='center'
      minH="100vh"
      minW="100vw"
    >
      <Box
         backgroundColor='#f5f9fc'
         borderRadius='5px'
         padding='100px'
      >
      <form>
        <Stack gap={4}>
        <Heading as='h1'>Sign up</Heading>
          <Input 
            placeholder='First name'
            variant='outline'
            w='25rem'
            {...register('firstName')} />
          <Input 
            placeholder='Last name'
            variant='outline'  
            {...register('lastName')}/>
          <Input 
            placeholder='Email'
            variant='outline' 
            {...register('email')}/>
          <Input 
            placeholder='Username'
            variant='outline' 
            {...register('username')}/>
          <Input 
            placeholder='Password'
            variant='outline' 
            {...register('password')}/>
        </Stack>
          <Button 
            type='submit'
            bg='dodgerblue'
            >
            <FaArrowRightLong />
              Sign up</Button>
      </form>
      <Text>Already a member?</Text>
      <Link to='/login'>Login</Link>
      </Box>
    </Box>
  )
}
