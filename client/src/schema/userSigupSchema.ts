import { z } from 'zod';


export const userSignupSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    username: z.string().min(5, { message: "Username is required" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string().min(6, { message: "Confirmation password must be at least 6 characters" })
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
});

export const userLoginSchema = z.object({
    username: z.string().min(1, { message: 'Username is required' }),
    password: z.string().min(1, { message: 'Password is required' })
})


export const createGroupSchema = z.object({
    groupName: z.string().min(1, { message: "Group must have a name" }),
    groupDescription: z.string().min(5, { message: "Group description is required" })
})
      
