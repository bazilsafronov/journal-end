import React from "react";
import Image  from "next/image";
import styles from '../../styles/Articles.module.sass';
import Link from "next/link";
import {slugify} from "../../utils/slugify.ts";

const articles = [
    {
        id: 1,
        title: "Best Linux Distro for Programming: Top 6 Ranked [2024]",
        imageUrl: "/images/linux.jpg"
    },
    {
        id: 2,
        title: "How to Install Bitcoin on Linux",
        imageUrl: "/images/bitcoin.jpg"
    },
    {
        id: 3,
        title: "How to Install Bitcoin on Linux",
        imageUrl: "/images/wallet.jpg"
    },
    {
        id: 4,
        title: "Best Linux Distro for Programming: Top 6 Ranked [2024]",
        imageUrl: "/images/crypto.jpg"
    },
];

const Articles: React.FC = () => {
    return (
        <div className={styles.articles_container}>
            <h1>Articles</h1>
            {articles.map((item) => (
                <Link key={item.id} href={`/articles/${slugify(item.title)}`}>
                    <div className={styles.article_card}>
                        <Image
                            className={styles.article_image}
                            src={item.imageUrl}
                            width={500}
                            height={300}
                            alt={item.title}
                        />
                        <h3 className={styles.article_title}>{item.title}</h3>
                        <p className={styles.article_content}></p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Articles;