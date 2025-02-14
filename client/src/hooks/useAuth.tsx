import { useContext, useState } from 'react'
import { AuthContext } from '@/context/AuthProvider';

export const useAuth = () => {
  const [token, setToken] = useState();
  const [loading, setLoading] = useState();
  const [errors, setErrors] = useState();


  const context = useContext(AuthContext);
    if (!context) {
      throw Error('useAuth must be used within an AuthProvider')
    }

  const loginUrl = 'http://localhost:5001/login';

  


  return (
    <div>useLogin</div>
  )
}
