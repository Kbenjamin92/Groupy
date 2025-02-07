import express from 'express';
import prisma from '../prisma';

const router = express.Router();

router.post('/group-creation', async (req, res) => {
    const { groupName, groupDescription, memberEmail } = req.body;

    if (!groupName || !groupDescription) {
        res.status(400).json('Group name and description are required!')
    }

    // const newGroup;
})

export default router;