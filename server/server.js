import  express from 'express';
import cors  from 'cors';
import prisma from './prisma.js'
import dotenv from 'dotenv';
import signupRoute from './auth/signupRoute.js';
import authRoute from './auth/authRouth.js';
import createGroupRoute from './group-creation/createGroupRoute.js'
dotenv.config();
import cookieParser from 'cookie-parser';
import verifyToken from './auth/protectedAuthRoute.js';

const PORT = process.env.PORT || 5001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.post('/signup', signupRoute);
app.post('/login', authRoute);
app.post('/group-creation', createGroupRoute);
app.get('/protected', verifyToken, (req, res) => {
    res.json({ message: `Hello, ${req.user.firstName}`})
})

// app.delete('/:id', async (req, res) => {
//     await prisma.users.delete({
//         where: { id: 2 }
//     })
//     res.status(400).json('Invalid request')
// })

// // testing endpoints
app.get('/signup', async (req, res) => {
    try {
        const users = await prisma.users.findMany()
        res.status(200).json(users);
    } catch(err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));