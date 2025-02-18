import { useContext, useState } from 'react'
import { AuthContext } from '@/context/AuthProvider';
import { UserLoginType } from '@/interfaces';
import axios from 'axios';

export const useAuth = () => {
  const [accessToken, setAccessToken] = useState();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState();


  const context = useContext(AuthContext);
    if (!context) {
      throw Error('useAuth must be used within an AuthProvider')
    }

  const loginUrl = 'http://localhost:5001/login';

  const loginUser = async (loginData: UserLoginType) => {
    if (loginData) {
      setLoading(true)
      try {
        const res = await axios.post(loginUrl, loginData, { withCredentials: true });
        if (res.data) {
          setAccessToken(res.data.token)
        }
        console.log(res.data)
      } catch(err: any) {
          const errorMsg = err.response?.data?.message || 'Something went wrong!'
          localStorage.setItem('message', err.response?.data?.message)
          setErrors(errorMsg)
      }
    }
  }


  return ({ loginUser, loginUrl, loading, errors })
}
