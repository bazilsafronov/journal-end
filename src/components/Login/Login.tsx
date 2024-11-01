import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useStore } from '../../stores/storeContext.tsx';
import { useRouter } from 'next/router';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const store = useStore();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch('/api/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'login', email, password }),
        });

        if (response.ok) {
            const { token } = await response.json();
            localStorage.setItem('token', token);
            store.setAuthenticated(true, token);
            toast.success('Успешный вход в систему!', {
                position: 'top-right',
                autoClose: 3000,
            });
            router.push('/articles'); // Переход на страницу статей
        } else {
            const { message } = await response.json();
            toast.error(message || 'Ошибка при входе в систему!', {
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
                <button type="submit">Войти</button>
            </form>
            <ToastContainer />
        </>
    );
};

export default Login;
