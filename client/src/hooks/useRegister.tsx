import { useState } from 'react'
import axios from 'axios';
import { UserSignupType, GroupType } from '../interfaces'

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState();

    const signupUrl = 'http://localhost:5001/signup';
    const groupCreationUrl = 'http://localhost:5001/group-creation';

    // function to create a user
    const createNewUser = async (userData: UserSignupType) => {
        setIsLoading(true)
        try {
            const res = await axios.post(signupUrl, userData, {
                headers: { "Content-Type": "application/json" },
            });
            // handle message for existing user...
            console.log(res.data.message)
            setMessage(res.data.message || 'User has been successfully created!');
            localStorage.setItem("message", res.data.message);
        } catch(err: any) {
            console.error(err.response?.data || err.message);
        }
        finally{
            setIsLoading(false);
        }
    }
    // function to create a group after signing up a user
    const createNewGroup = async (groupData: GroupType) => {
        setIsLoading(true)
        try {
            const res = await axios.post(groupCreationUrl, groupData, {
                headers: { "Content-Type": "application/json" },
            });
            console.log(res.data.message)
            setMessage(res.data.message || 'Your Group has been successfully created!');
        } catch(err: any) {
            console.error(err.response?.data || err.message);
        }
        finally{
            setIsLoading(false);
        }
    }

   
  return ({ createNewUser, message, isLoading, createNewGroup })
}
