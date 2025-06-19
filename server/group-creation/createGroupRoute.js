import express from 'express';
import prisma from '../prisma.js';
import { body, validationResult } from 'express-validator';
import 'dotenv/config';

const router = express.Router();

router.post('/group-creation', 
    [
        body('groupName').isString(),
        body('groupDescription').isString()
    ],
    async (req, res) => { 
        const errors = validationResult(req);
        if (!errors) {
            res.status(400).json({ errors: errors.arrays() })
        }
        const { groupName, groupDescription, memberEmail } = req.body;
        if (!groupName || !groupDescription) {
            res.status(400).json('Group name and description are required!')
        }
        const newGroup = {
            name: groupName,
            description: groupDescription,
        }
        try {
            await prisma.groups.create({
                data: newGroup
            });
            res.status(201).json('Group successfully created!')
        } catch(error) {
            console.error(error.message)
            res.status(500).json('Unable to create group', error.message)
        }
})

export default router;