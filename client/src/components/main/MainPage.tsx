import { Grid, GridItem, Box } from '@chakra-ui/react';
import { AuthProvider } from '@/context/AuthProvider';

export const MainPage = () => {
  return (
    <>
    <AuthProvider>
        <Grid 
          templateColumns={{
            base: '1fr',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)'
          }}
            templateRows='repeat(4)'
            gap={2}
            w='100vw'
          >
          <GridItem colSpan={4}>
            <Box background="dodgerblue" color='white' h='85px'>
                Nav
            </Box>
          </GridItem>
          <GridItem colSpan={3} rowSpan={3}>
            <Box background="gray" color='white' h='100vh'>
                Main
            </Box>
          </GridItem>
          <GridItem colSpan={1} rowSpan={3} >
            <Box background="gold" color='white' h='100vh'>
                Aside
            </Box>
          </GridItem>
          <GridItem colSpan={4}>
            <Box background="dodgerblue" color='white' h='10vh'>
                Footer
            </Box>
          </GridItem>
        </Grid>
      </AuthProvider>
    </>
  )
}
