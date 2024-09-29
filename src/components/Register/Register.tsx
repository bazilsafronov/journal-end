import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'; // Импортируем useRouter

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter(); // Инициализируем роутер

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch('/api/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'register', email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            toast.success('Регистрация прошла успешно!', {
                position: 'top-right',
                autoClose: 4000,
            });
            router.push('/'); // Используем router.push для редиректа
        } else {
            const errorData = await response.json();
            toast.error(errorData.message || 'Ошибка при регистрации!', {
                position: 'top-right',
                autoClose: 4000,
            });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Зарегистрироваться</button>
            </form>
            <ToastContainer />
        </>
    );
};

export default Register;
