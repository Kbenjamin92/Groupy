import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Signup } from './components/auth/Signup';
import { Login } from './components/auth/Login';
import { MainPage } from './components/main/MainPage';
import { GroupCreation } from './components/GroupCreation';

const App = () => {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/group-creation" element={<GroupCreation />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
