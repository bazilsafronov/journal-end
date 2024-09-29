import type { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../utils/db';
import User from '../../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connect();

    if (req.method === 'POST') {
        const { action, email, password } = req.body;

        if (action === 'register') {
            try {
                const hashedPassword = await bcrypt.hash(password, 10);
                const newUser = new User({ email, password: hashedPassword, role: 'user' });
                await newUser.save();
                const token = jwt.sign({ _id: newUser._id, email: newUser.email, role: newUser.role }, JWT_SECRET);
                res.status(201).json({ message: 'Пользователь успешно зарегистрирован', token });
            } catch (error) {
                res.status(500).json({ message: 'Ошибка при регистрации пользователя' });
            }

        } else if (action === 'login') {
            try {
                const user = await User.findOne({ email });
                if (!user) return res.status(401).json({ message: 'Неверный логин или пароль' });

                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) return res.status(401).json({ message: 'Неверный логин или пароль' });

                const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET);
                res.status(200).json({ token });
            } catch (error) {
                res.status(500).json({ message: 'Ошибка при авторизации пользователя' });
            }
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Метод ${req.method} не разрешен`);
    }
}
