import User from '../models/User.js';

const register = (email, password) => {
    return User.create({ email, password });
};
const login = (email, password) => {
    return User.find({ email, password });
};


export default {
    register,
    login,
}