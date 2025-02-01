import  express from 'express';
import cors  from 'cors';
import pool  from './db/db.js';
import prisma from './prisma.js'
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const users = await prisma.users.findMany()
        res.status(200).json(users);
    } catch(err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));