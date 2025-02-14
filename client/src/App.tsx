import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainPage } from './components/main/MainPage';
import { Grid, Spinner } from '@chakra-ui/react';
const LazySignup = React.lazy(() => import('./components/auth/Signup'))
const LazyLogin = React.lazy(() => import('./components/auth/Login'))
const LazyGroupCreation = React.lazy(() => import('./components/GroupCreation'))


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
        <React.Suspense fallback={<Spinner />}>
          <Routes>
              <Route path="/signup" element={<LazySignup />} />
              <Route path="/login" element={<LazyLogin />} />
              <Route path="/group-creation" element={<LazyGroupCreation />} />
          </Routes>
        </React.Suspense>
      </Grid>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
