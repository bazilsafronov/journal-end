import connect from '../utils/db';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export const getUsers = async () => {
    await connect();
    return User.find({});
};

export const addUser = async (name) => {
    await connect();
    const user = new User({ name });
    await user.save();
    return user;
};
