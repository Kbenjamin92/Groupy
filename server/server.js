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

app.post('/signup', signupRoute);

// // testing endpoints
app.get('/', async (req, res) => {
    try {
        const users = await prisma.users.findMany()
        res.status(200).json(users);
    } catch(err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));