import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { slugify } from '../../../utils/slugify'; // Импортируйте slugify

const ArticleForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const article = {
            title,
            content,
            imageUrl: image,
            slug: slugify(title) // Генерируем slug на основе заголовка
        };
        try {
            const response = await fetch('/api/articles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(article),
            });
            if (response.ok) {
                const newArticle = await response.json();
                toast.success('Статья успешно добавлена!', {
                    position: 'top-right',
                    autoClose: 4000,
                });
                // Сброс формы после успешного добавления
                setTitle('');
                setContent('');
                setImage('');
            } else {
                toast.error('Ошибка при добавлении статьи!', {
                    position: 'top-right',
                    autoClose: 4000,
                });
            }
        } catch (error) {
            toast.error('Ошибка сети при добавлении статьи!', {
                position: 'top-right',
                autoClose: 4000,
            });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="URL Image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                />
                <button type="submit">Create new article</button>
            </form>
            <ToastContainer />
        </>
    );
};

export default ArticleForm;
