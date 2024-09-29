import React, {useEffect, useState} from "react";
import Image  from "next/image";
import styles from '../../styles/Articles.module.sass';
import Link from "next/link";
import {slugify} from "../../utils/slugify.ts";
import {Article} from "../../types/article.ts";

const Articles: React.FC = () => {
    const [articles, setDataArticles] = useState<Article[]>([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await fetch("/api/articles");
            const data = await response.json();
            setDataArticles(data);
        }
        fetchArticles();
    }, []);

    const isValidImageUrl = (url: string) => {
        return url.startsWith('/') || url.startsWith('http');
    };

    return (
        <div className={styles.articles_container}>
            <h1>Articles</h1>
            {articles.map((item) => (
                <Link key={item._id} href={`/articles/${slugify(item.title)}`}>
                    <div className={styles.article_card}>
                        {item.imageUrl && isValidImageUrl(item.imageUrl) ? (
                            <Image
                                className={styles.article_image}
                                src={item.imageUrl}
                                width={500}
                                height={300}
                                alt={item.title}
                            />
                        ) : (
                            <div>Изображение недоступно</div>
                        )}
                        <h3 className={styles.article_title}>{item.title}</h3>
                        <p className={styles.article_content}>{item.content}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Articles;
