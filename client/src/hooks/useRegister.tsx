import { useState } from 'react'
import axios from 'axios';
import { UserSignupType } from '../interfaces'

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState();

    const url = `http://localhost:5001/signup`;

    const createNewUser = async (userData: UserSignupType) => {
        setIsLoading(true)
        try {
            const res = await axios.post(url, userData, {
                headers: { "Content-Type": "application/json" },
            });
            console.log(res.data.message)
            setMessage(res.data.message || 'User has been successfully created!');
        } catch(err: any) {
            console.error(err.response?.data || err.message);
        }
        finally{
            setIsLoading(false);
        }
    }

   
  return ({ createNewUser })
}
