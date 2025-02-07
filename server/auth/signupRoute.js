import express from 'express';
import bycrypt from 'bcryptjs';
import { body, validationResult } from 'express-validator';
import prisma from '../prisma.js'

const router = express.Router();

router.post('/signup', 
    [   
        body('firstName').isString(),
        body('lastName').isString(),
        body('email').isEmail().withMessage('Invalid email format'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors) {
            return res.status(400).json({ errors: errors.arrays() });
        }

        const { firstName, lastName, email, username, password } = req.body;

        // validate user input
        if (!email || !username || !password) {
            res.status(400).json({ message: 'All fields are required!' });
        }
        // checking to see if user exists
        const existingUser = await prisma.users.findUnique({
            where: {  
                username: username,
                email: email,
            }
        });
        if (existingUser) {
            res.status(400).json({ message: 'User already exists!' });
        }
        // hash the password
        const hashPassword = await bycrypt.hash(password, 10);

        const newUser = {
            username: username,
            email: email,
            password: hashPassword,
            firstName: firstName,
            lastName: lastName,
        }
        try {
            await prisma.users.create({
                data: newUser
        });
            res.status(201).json({ message: `Welcome to Groupy ${newUser.firstName}!` });
        } catch(error) {
            console.log('Unable to create new user', error.message);
            res.status(500).json(error.message)
        }
});

export default router; 