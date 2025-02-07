import { useForm, SubmitHandler,  } from 'react-hook-form'
import { Text, 
    Box, 
    Input, 
    Stack, 
    Textarea} from '@chakra-ui/react'
import { GroupType } from '@/interfaces';
import { FaArrowRightLong } from "react-icons/fa6";
import { GroupyTitle } from './GroupyTitle';
import { useRegister } from '@/hooks/useRegister';
import { GroupyButton } from './GroupyButton';

export const GroupCreation = () => {
    const { createNewGroup } = useRegister();
    const { register, handleSubmit, reset } = useForm<GroupType>();
    const mess = localStorage.getItem("message");

    const onSubmit: SubmitHandler<GroupType> = (data) => {
        console.log(data)
        reset({
            groupName: '',
            groupDescription: '',
            memberEmail: ''
        })
    }
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={5}>
            <Box 
              display='flex'
              justifyContent='flex-start'
            >
              <Text fontSize='2xl'>{ mess }</Text>
            </Box>
              <Input 
                placeholder="What's the name of your group?"
                variant='subtle'
                w='25rem'
                { ...register('groupName') }
                />
                <Textarea 
                  placeholder="Tell me more about your group..."
                  variant='subtle'
                  w='25rem'
                { ...register('groupDescription') }
                />
                <Input 
                  placeholder="Add an email to invite a member"
                  variant='subtle'
                  w='25rem'
                  { ...register('memberEmail') }
                />
                <Box
                  display='flex'
                  justifyContent='flex-start'
                  alignItems='flex-start'
                  gap={3}
                >
                  <GroupyButton>
                    <FaArrowRightLong />
                      Create Group
                  </GroupyButton>
                </Box>
            </Stack>
          </form>
        </Box>
        </Box>
      </Box>
      
    </>
  )
}
