import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from "../../styles/ArticleDetail.module.sass";
import { Article } from "../../types/article.ts";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ArticleDetail: React.FC = () => {
    const router = useRouter();
    const { slug } = router.query;

    const [article, setArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            if (typeof slug === 'string') {  // Убедимся, что slug — это строка
                try {
                    const response = await fetch(`/api/articles/${slug}`);
                    if (response.ok) {
                        const data = await response.json();
                        setArticle(data);
                    } else {
                        throw new Error('Статья не найдена');
                    }
                } catch (error) {
                    toast.error(error.message || 'Не удалось загрузить статью!', {
                        position: 'top-right',
                        autoClose: 4000,
                    });
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchArticle();
    }, [slug]);

    if (loading) return <div>Загрузка...</div>;
    if (!article) return <div>Статья не найдена</div>;

    return (
        <div>
            <ToastContainer />
            <div className={styles.line}></div>
            <main>
                <ul className={styles.breadcrumb}>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/articles">Articles</a>
                    </li>
                    <li>
                        <a href="/">Programming</a>
                    </li>
                </ul>
            </main>
            <section className={styles.author}>
                <img src="/avatar.svg" height={32} width={32} alt="avatar" />
                <span>Bazil Safronov</span>
                <span> | </span>
                <span>09 Feb, 2024</span>
            </section>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    {article.title}
                </h1>
                <section className={styles.social}>
                    <a href="">
                        <span>
                            <img src="/tg.svg" height={36} width={36} alt="tg" />
                        </span>
                    </a>
                    <a href="">
                        <span>
                            <img src="/twitter.svg" height={36} width={36} alt="twitter" />
                        </span>
                    </a>
                    <a href="">
                        <span>
                            <img src="/inst.svg" height={36} width={36} alt="instagram" />
                        </span>
                    </a>
                    <a href="">
                        <span>
                            <img src="/wats.svg" height={36} width={36} alt="whatsapp" />
                        </span>
                    </a>
                </section>
                {article.imageUrl && (
                    <img className={styles.image} src={article.imageUrl} alt="image" />
                )}
                <p>{article.content}</p>
            </div>
        </div>
    );
}

export default ArticleDetail;
