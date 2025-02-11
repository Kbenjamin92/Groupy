import express from 'express';
import prisma from '../prisma.js';
import { body, validationResult } from 'express-validator';
import nodemailer from 'nodemailer';
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

        const appUrl = 'http://localhost:5173/signup';

        // handle sending email invite by creating transporter using Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PW
            }
        });
        //  create the email content
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: memberEmail,
            subject: 'Groupy membership invite',
            html: `
                <h2>Hello, you have been invited to join Groupy!</h2>
                <p>Click the link below to be directed to Groupys sign up page!</p>
                <button><a href="${appUrl}">Join Groupy!</a></button>
            `
        }
        //  send the email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error sending email:', error)
            } else {
                console.log('Email sent successfully:', info.response)
            }
        })

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