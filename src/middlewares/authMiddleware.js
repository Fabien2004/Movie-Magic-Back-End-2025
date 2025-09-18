import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/constant.js'

 export const authMiddleware = (req, res, next) => {
    const token = req.cookies['auth'];

    if(!token){
        return next(); 
    }

    try {
      const decodedToken = jwt.verify(token, JWT_SECRET);
     console.log(decodedToken);
     
      
        return next();
    } catch (err) {
        res.clearCookie('auth');
       res.redirect('/auth/login');
    }


};
