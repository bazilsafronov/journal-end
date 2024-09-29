import React, { useEffect, useState } from 'react';
import { Article } from '../../types/article.ts';
import styles from '../../styles/Articles.module.sass';
import { slugify } from '../../utils/slugify.ts';
import Link from 'next/link';
import { toast } from 'react-toastify';

const Articles: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('/api/articles');
                if (!response.ok) {
                    throw new Error('Не удалось загрузить статьи');
                }
                const data = await response.json();
                console.log('Полученные статьи:', data); // Проверка вывода в консоль
                setArticles(data);
            } catch (error) {
                toast.error(error.message || 'Ошибка при загрузке статей!', {
                    position: 'top-right',
                    autoClose: 4000,
                });
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    if (loading) return <div>Загрузка...</div>;

    return (
        <div>
            {articles.length === 0 ? (
                <div>Статьи не найдены</div>
            ) : (
                <div className={styles.articles_container}>
                    <h1>Articles</h1>
                    {articles.map((item) => (
                        <Link key={item._id} href={`/articles/${slugify(item.title)}`}>
                            <div className={styles.article_card}>
                                {item.imageUrl ? (
                                    <img src={item.imageUrl} alt="Article Image" />
                                ) : (
                                    <div>No image</div>
                                )}
                                <h2>{item.title}</h2>
                                <p>{item.content.slice(0, 100)}...</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Articles;
