import './App.css'
import { Grid, GridItem, Box } from '@chakra-ui/react';

const App = () => {
  
  return (
    <>
      <Grid 
        templateColumns='repeat(4, 1fr)'
        templateRows='repeat(3, 1fr)'
        gap={1}
        >
        <GridItem colSpan={4} rowSpan={1}>
          <Box background="dodgerblue" color='white' h='90px'>
            Nav
          </Box>
        </GridItem>
        <GridItem colSpan={3} rowSpan={2}>
          <Box background="crimson" color='white' h='405px'>
            Main
          </Box>
        </GridItem>
        <GridItem colSpan={1} rowSpan={3}>
          <Box background="gold" color='white' h='405px'>
            Aside
          </Box>
        </GridItem>
        <GridItem colSpan={4} rowSpan={1}>
          <Box background="dodgerblue" color='white' h='100px'>
            Footer
          </Box>
        </GridItem>
      </Grid>
    </>
  )
}

export default App
