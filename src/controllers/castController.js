import { Router } from "express";
import castService from "../services/castService.js";

const router = Router();

router.get('/create', (req, res) => {
    res.render('cast/create');
});

router.post('/create', async (req, res) => {
    const castData = req.body;
    
    try { 
           await castService.create(castData); 
        } catch (err) {
            const errorMessage = Object.values(err.errors)[0]?.message;
            return res.render('cast/create', { error: errorMessage, movie: castData}); 
        }
    res.redirect('/');
});

export default router;
