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
router.get('/login', (req, res) => {
    res.render('auth/login');
});
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    await authServeice.login(email, password);
    res.redirect('/');
});

export default router;