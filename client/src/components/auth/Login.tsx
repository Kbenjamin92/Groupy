import { useForm, SubmitHandler } from 'react-hook-form'
import { UserLoginType } from '@/interfaces'
import { Link } from 'react-router-dom'
import { 
  Input, 
  Stack, 
  Button, 
  Heading, 
  Text, 
  Box } from '@chakra-ui/react'
  import { FaArrowRightLong } from "react-icons/fa6";

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
         backgroundColor='#f5f9fc'
         borderRadius='5px'
         padding='100px'
      >
    <form>
      <Stack gap={4}>
      <Heading as='h1'>Login</Heading>
        <Input 
          placeholder='Username'
          variant='subtle'
          w='25rem'
          {...register('username')}/>
        <Input 
          placeholder='Password'
          variant='subtle' 
          {...register('password')}/>
      </Stack>
        <Button 
          type='submit'
          bg='dodgerblue'
          >
           <FaArrowRightLong /> 
            Login</Button>
    </form>
    <Text>Not a member?</Text>
    <Link to='/signup'>Sign up</Link>
    </Box>
  </Box>
  )
}
