import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Signup } from './components/auth/Signup';
import { Login } from './components/auth/Login';
import { MainPage } from './components/main/MainPage';

const App = () => {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
