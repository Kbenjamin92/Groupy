import express from 'express';

const router = express.Router();

router.post('/logout', async (req, res) => {
    res.clearCookie('token');
    res.json('Logged out succesfully!')
});

export default router;