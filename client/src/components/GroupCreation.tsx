import { useEffect } from 'react';
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
import { zodResolver } from '@hookform/resolvers/zod';
import { createGroupSchema } from '@/schema/userSigupSchema';
import { useNavigate } from 'react-router-dom';

export const GroupCreation = () => {
    const navigate = useNavigate()
    const { createNewGroup, message } = useRegister();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<GroupType>({
        resolver: zodResolver(createGroupSchema)
    });
    const mess = localStorage.getItem("message");

    const onSubmit: SubmitHandler<GroupType> = async (data) => {
        await createNewGroup(data);
        reset({
            groupName: '',
            groupDescription: '',
            memberEmail: ''
        })
    }
    useEffect(() => {
        if (message === 'Your Group has been successfully created!') {
            navigate('/')
        }
    })
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
                { errors.groupName && <Text color='crimson'>{ errors.groupName?.message }</Text>}
              <Input 
                placeholder="What's the name of your group?"
                variant='subtle'
                w='25rem'
                { ...register('groupName') }
                />
                { errors.groupDescription && <Text color='crimson'>{ errors.groupDescription?.message }</Text>}
                <Textarea 
                  placeholder="Tell me more about your group..."
                  variant='subtle'
                  w='25rem'
                { ...register('groupDescription') }
                />
                <Input 
                  placeholder="Add an email to invite a member, or do it later"
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
