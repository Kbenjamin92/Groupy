import { useState } from 'react'
import axios from 'axios';
import { UserSignupType, GroupType } from '../interfaces'

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [existingUserMessage, setExistingUserMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [basicGroupObj, setBasicGroupObj] = useState<GroupType>();

    const signupUrl = 'http://localhost:5001/signup';
    const groupCreationUrl = 'http://localhost:5001/group-creation';

    // function to create a user
    const createNewUser = async (userData: UserSignupType) => {
        setIsLoading(true)
        try {
            const res = await axios.post(signupUrl, userData, {
                headers: { "Content-Type": "application/json" },
            });
            if (res.data.message) {
                localStorage.setItem('message', res.data.message);
                localStorage.setItem('secondMessage', res.data.secondMessage)
                setMessage(res.data.message || 'User has been successfully created!');
            }
        } catch(err: any) {
            const erroMsg = err.response?.data?.message || 'Something went wrong';
            setExistingUserMessage(erroMsg)
            console.error(err.response?.data || err.message);
        }
        finally{
            setIsLoading(false);
        }
    }
    // function to create a group after signing up a user
    const createNewGroup = async (groupData: GroupType) => {
        const { groupName, groupDescription } = groupData;

        if (groupData) {
            localStorage.setItem('Group name:', groupName);
            localStorage.setItem('Group description:', groupDescription);
            setBasicGroupObj(groupData)
        }
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
  return ({ 
    createNewUser, 
    message, 
    existingUserMessage, 
    isLoading, 
    createNewGroup, 
    showPassword, 
    setShowPassword,
    basicGroupObj, 
    setBasicGroupObj
    })
}
