import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import prisma from '../prisma.js';

const router = express.Router();
const SECRET_KEY = process.env.JWT_SECRET;

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // find user
    const user = await prisma.users.findUnique({
        where: { 
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
    if (user && isMatch) {
        // generate token
        const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });
        res.cookie('authToken', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 1000
        })
       return res.status(200).json({ message: 'Login Successful', token })
    } else {
        res.status(401).json({ message: 'Invalid credentails'});
    }
});
// logout clear cookies
router.post('/logout', async (req, res) => {
    res.clearCookie('authToken');
    res.status(200).json('Logged out succesfully!')
});

export default router;