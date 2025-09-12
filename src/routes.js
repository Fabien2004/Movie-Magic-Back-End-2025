import { Router } from 'express';

import homeController from './controllers/homeController.js';
import movieController from './controllers/movieController.js';
import castController from './controllers/castController.js';

const router = Router();

router.use(homeController);
router.use('/movies', movieController);
router.use('/cast', castController);

//router.use((req, res) => {
  //res.status(404).render("404"); 
//}); 

export default router; 
