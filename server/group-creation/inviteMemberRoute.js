import express from 'express';
import nodemailer from 'nodemailer'

const router = express.Router();

// finish this later this functionality will be handled on the main page.
router.post('/invite-member', (req, res) => {

const appUrl = 'http://localhost:5173/signup';
// handle sending email invite by creating transporter using Gmail
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
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

})