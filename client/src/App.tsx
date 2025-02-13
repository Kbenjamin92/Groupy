import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Signup } from './components/auth/Signup';
import { Login } from './components/auth/Login';
import { MainPage } from './components/main/MainPage';
import { GroupCreation } from './components/GroupCreation';
import { Grid } from '@chakra-ui/react';

const App = () => {
  
  return (
    <>
    <Router>
      <Grid 
        templateColumns={{
          base: '1fr',
          sm: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)'
      }}
        
        w='100vw'
      >
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/group-creation" element={<GroupCreation />} />
        </Routes>
      </Grid>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
