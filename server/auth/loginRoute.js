import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import prisma from '../prisma.js';

const router = express.Router();


router.post('/login', async (req, res) => {
    const { email, username, password } = req.body;
    // find user
    const user = await prisma.users.findUnique({
        where: { 
            email: email,
            username: username
        }
    });
    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' })
    }
    // match password
    const isMatch = bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json({ message: 'Incorrect Username and/or Password. Try again or reset your password.' })
    }
    // generate token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });

    res.json({ message: 'Login Successful', token })
});

export default router;