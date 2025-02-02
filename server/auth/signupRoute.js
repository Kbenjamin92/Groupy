import express from 'express';
import prisma from '../prisma.js'

const router = express.Router();

router.post('/sign-up', async (req, res) => {
    const newUser = req.body;
    try {
        const createUser = await prisma.user.create({
            data: newUser
        });
        res.status(200).json(createUser);
    } catch(error) {
        console.log('Was unable to create new user', error.message)
        res.status(500).json(error.message)
    }

})

export default router;