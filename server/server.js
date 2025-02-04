import  express from 'express';
import cors  from 'cors';
import prisma from './prisma.js'
import dotenv from 'dotenv';
import signupRoute from './auth/signupRoute.js';
import loginRoute from './auth/loginRoute.js';
import logoutRoute from './auth/logoutRoute.js';
dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();
app.use(cors());
app.use(express.json());

app.post('/signup', signupRoute);
app.post('/login', loginRoute);
app.post('logout', logoutRoute);

// app.delete('/:id', async (req, res) => {
//     await prisma.users.delete({
//         where: { id: 2 }
//     })
//     res.status(400).json('Invalid request')
// })

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