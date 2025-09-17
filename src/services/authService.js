import User from '../models/User.js';
import bcrypt from 'bcrypt.';
const register = (email, password) => {
    return User.create({ email, password });
};
const login = async  (email, password) => {
    const user = await User.findOne({ email})
    if(!user){
        throw new error('Invalid email or password');
    }
    const isValid = await bcrypt.compare(password, user.password);

    if(!isValid){
        throw new error('Invalid password');
    }
    
   
    

    
};


export default {
    register,
    login,
}