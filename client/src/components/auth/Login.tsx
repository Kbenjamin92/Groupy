import { useForm, SubmitHandler } from 'react-hook-form'
import { UserLoginType } from '@/interfaces'
import { Link } from 'react-router-dom'
import { 
  Input, 
  Stack,  
  Heading, 
  Text, 
  Box,
  Button,
  } from '@chakra-ui/react'
import { FaArrowRightLong } from "react-icons/fa6";
import { GroupyButton } from '../GroupyButton';
import { GroupyTitle } from '../GroupyTitle';
import { InputGroup } from '../ui/input-group';
import { useRegister } from '@/hooks/useRegister';
import { zodResolver } from '@hookform/resolvers/zod';
import { userLoginSchema } from '@/schema/userSigupSchema';
import { useAuth } from '@/hooks/useAuth';

const Login = () => {
  const {  
    showPassword, 
    setShowPassword } = useRegister();
    const { loginUser } = useAuth();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<UserLoginType>({
    resolver: zodResolver(userLoginSchema)
  });

  const onSubmit: SubmitHandler<UserLoginType> = async (data) => {
    await loginUser(data)
    reset({
      username: '',
      password: ''
    })
  }   

  // create function to verify that the token is accessed and navigate to the home page

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
         padding='45px'
      >
    <GroupyTitle />
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={4}>
        <Box 
          display='flex'
          justifyContent='center'
          >
          <Stack>
            <Heading size='4xl'>Login</Heading>
            <Text>Please fill in the form below to login.</Text>
          </Stack>
        </Box>
        { errors.username && <Text color='crimson'>{ errors.username?.message }</Text>}
        <Input 
          placeholder='Username'
          variant='subtle'
          w='100%'
          {...register('username')}/>
          <Box 
              display='flex' 
              position='relative'
              width='100%'
              justifyContent='space-between'
              >
              { errors.password && <Text color='crimson'>{ errors.password?.message }</Text>}
              <InputGroup>
                <Input 
                  placeholder='Password'
                  variant='subtle'
                  width='100%'
                  pr='4rem'
                  type={ !showPassword ? 'password' : 'text'} 
                  {...register('password')}/>
              </InputGroup>
                <Button 
                  type='button'
                  size="sm"
                  color='black'
                  outline='none'
                  border='none'
                  onClick={() => setShowPassword(!showPassword)} 
                  >{ showPassword ? 'Hide' : 'Show'}
                </Button>
              </Box>
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

export default Login;