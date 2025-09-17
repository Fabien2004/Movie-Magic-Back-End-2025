import { Router } from 'express';
import authServeice from '../services/authService.js';

const router = Router();


router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    const { email, password, rePassword } = req.body;
    await authServeice.register(email, password);
    res.redirect('/auth/login');
});

export default router;