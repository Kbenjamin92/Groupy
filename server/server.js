import  express from 'express';
import cors  from 'cors';
import prisma from './prisma.js'
import dotenv from 'dotenv';
import signupRoute from './auth/signupRoute.js';
dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/sign-up', signupRoute);

// testing endpoints
app.get('/', async (req, res) => {
    try {
        const users = await prisma.users.findMany()
        res.status(200).json(users);
    } catch(err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// testing endpoint
app.post('/create-user', async (req, res) => {
    const userBody = req.body;
    try {
        const createUser = await prisma.users.create({
            data: userBody
        })
        res.status(200).json(createUser)
    } catch(error) {
        console.log('Theres an issue with your post', error.message)
    }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));