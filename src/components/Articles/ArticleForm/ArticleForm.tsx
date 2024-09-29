import React, { useState } from 'react';

const ArticleForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const article = { title, content, imageUrl: image };
        const response = await fetch('/api/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(article),
        })
        if(response.ok) {
            const newArticle = await response.json();
            console.log('Статья добавлена');
        } else {
            console.error('Ошибка при добавлении статьи');
        }
        }

    return (
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
    )
}

export default ArticleForm;