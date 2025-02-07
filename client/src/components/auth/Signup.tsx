import { useEffect } from 'react';
import { useForm, SubmitHandler,  } from 'react-hook-form'
import { UserSignupType } from '@/interfaces'
import { Link } from 'react-router-dom'
import { 
  Input, 
  Stack, 
  Heading, 
  Text, 
  Box } from '@chakra-ui/react'
import { FaArrowRightLong } from "react-icons/fa6";
import { useRegister } from '@/hooks/useRegister'
import { userSignupSchema } from '../../schema/userSigupSchema';
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom';
import { GroupyTitle } from '../GroupyTitle';
import { GroupyButton } from '../GroupyButton';

export const Signup = () => {
  const navigate = useNavigate();
  const { createNewUser, message, existingUserMessage} = useRegister();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<UserSignupType>({
    resolver: zodResolver(userSignupSchema)
  });
  const onSubmit: SubmitHandler<UserSignupType> = async (data) => {
    await createNewUser(data);
    reset({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  }
  useEffect(() => {
    const storedMessage = localStorage.getItem('message')
    if (message || storedMessage) {
      navigate("/group-creation")
    }
  }, [message, navigate]);
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
      <GroupyTitle />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={4}>
          <Box 
            display='flex'
            justifyContent='flex-start'
            >
            <Heading as='h1'>Sign up</Heading>
          </Box>
          { existingUserMessage ? <Text color='crimson'>{ existingUserMessage }</Text> : null }
          { errors.firstName && <Text color='crimson'>{ errors.firstName?.message }</Text>}
          <Input 
            placeholder='First name'
            variant='subtle'
            w='25rem'
            {...register('firstName')} />
            { errors.lastName && <Text color='crimson'>{ errors.lastName?.message }</Text>}
          <Input 
            placeholder='Last name'
            variant='subtle'  
            {...register('lastName')}/>
            { errors.email && <Text color='crimson'>{ errors.email?.message }</Text>}
          <Input 
            placeholder='Email'
            variant='subtle' 
            {...register('email')}/>
            { errors.username && <Text color='crimson'>{ errors.username?.message }</Text>}
          <Input 
            placeholder='Username'
            variant='subtle' 
            {...register('username')}/>
            { errors.password && <Text color='crimson'>{ errors.password?.message }</Text>}
          <Input 
            placeholder='Password'
            variant='subtle' 
            {...register('password')}/>
            { errors.confirmPassword && <Text color='crimson'>{ errors.confirmPassword?.message }</Text>}
          <Input 
            placeholder='Confirm Password'
            variant='subtle' 
            {...register('confirmPassword')}/>
          <Box 
            display='flex'
            justifyContent='flex-start'
            alignItems='flex-start'
            gap={3}
            >
            <GroupyButton>
              <FaArrowRightLong />
                Sign up
            </GroupyButton>
            <Text>Already a member?</Text>
            <Link to='/login'>Login</Link>
          </Box>
        </Stack>
      </form>
      </Box>
    </Box>
  )
}
