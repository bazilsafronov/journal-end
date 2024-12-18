import React, { useEffect, useState } from 'react';
import { Article } from '../../types/article';
import styles from '../../styles/Articles.module.sass';
import { slugify } from '../../utils/slugify';
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
                setArticles(data);
            } catch (error) {
                const message = (error as Error).message || 'Ошибка при загрузке статей!';
                toast.error(message, {
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
            <h1>Articles</h1>
            {articles.length === 0 ? (
                <div>Статьи не найдены</div>
            ) : (
                <div className={styles.articles_container}>
                    {articles.map((item) => (
                        <Link key={item._id} href={`/articles/${slugify(item.title)}`}>
                            <div className={styles.article_card}>
                                {item.imageUrl ? (
                                    <img src={item.imageUrl} alt="Article Image"/>
                                ) : (
                                    <div className={styles.placeholder}/>
                                )}
                                <div className={styles.content}>
                                    <h2>{item.title}</h2>
                                    <p>{item.content.slice(0, 100)}...</p>
                                    <div className={styles.author}>{item.author}</div>
                                    <div className={styles.tag}>{item.tag}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Articles;
