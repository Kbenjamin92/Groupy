import { useForm, SubmitHandler } from 'react-hook-form'
import { UserLoginType } from '@/interfaces'
import { Link } from 'react-router-dom'
import { 
  Input, 
  Stack,  
  Heading, 
  Text, 
  Box,
  } from '@chakra-ui/react'
import { FaArrowRightLong } from "react-icons/fa6";
import { GroupyButton } from '../GroupyButton';
import { GroupyTitle } from '../GroupyTitle';

export const Login = () => {
  const { register, handleSubmit } = useForm<UserLoginType>();

  return (
    <Box 
    display='flex'
    justifyContent='center'
    alignItems='center'
    minH="100vh"
    minW="100vw"
  >
     <Box
         boxShadow="md"
         borderRadius='5px'
         padding='60px'
      >
    <GroupyTitle />
    <form>
      <Stack gap={4}>
        <Box 
          display='flex'
          justifyContent='flex-start'
          >
          <Heading as='h1'>Login</Heading>
        </Box>
        <Input 
          placeholder='Username'
          variant='subtle'
          w='25rem'
          {...register('username')}/>
        <Input 
          placeholder='Password'
          variant='subtle' 
          {...register('password')}/>
          <Box
            display='flex'
            justifyContent='flex-start'
            alignItems='flex-start'
            gap={3}
          >
            <GroupyButton>
              <FaArrowRightLong /> 
                Login
            </GroupyButton>
            <Text>Not a member?</Text>
            <Link to='/signup'>Sign up</Link>
          </Box>
      </Stack>
    </form>
    </Box>
  </Box>
  )
}
