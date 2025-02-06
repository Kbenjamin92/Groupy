import { Box, Heading, Stack } from '@chakra-ui/react'
import { FaShareNodes } from 'react-icons/fa6'


export const GroupyTitle = () => {
  return (
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
  )
}
