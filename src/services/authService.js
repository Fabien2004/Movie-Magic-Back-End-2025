import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET = 'urbv948t7g5vcuni324h57vhucnd942vr32';

const register = (email, password) => {
    return User.create({ email, password });
};
const login = async (email, password) => {
    const user = await User.findOne({ email })
    if (!user) {
        throw new Error('Invalid email or password');
    }
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid password');
    }

    const payload = {
        _id: user._id,
    }
    const token = jwt.sign(payload, SECRET, { expiresIn: '2d' });

    return token
};


export default {
    register,
    login,
}