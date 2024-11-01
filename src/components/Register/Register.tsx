import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { useStore } from '../../stores/storeContext.tsx';

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const store = useStore();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch('/api/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'register', email, password }),
        });

        if (response.ok) {
            const { token } = await response.json(); // Предполагаем, что токен возвращается
            localStorage.setItem('token', token);
            store.setAuthenticated(true, token); // Если у вас есть метод в store для обновления состояния
            toast.success('Регистрация прошла успешно!', {
                position: 'top-right',
                autoClose: 4000,
            });
            router.push('/');
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
            <p>
                Уже зарегистрированы? <a href="/login">Войти</a>
            </p>
            <ToastContainer/>
        </>
    );
};

export default Register;
