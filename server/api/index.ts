import express from 'express';
const router = express.Router();

router.use('/health', (req, res) => {
    res.json({ status: 'Ok' });
});

export default router;
