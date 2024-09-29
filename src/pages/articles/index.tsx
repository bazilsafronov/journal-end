import React from "react";
import Image  from "next/image";
import styles from '../../styles/Articles.module.sass';
import Link from "next/link";

const Index: React.FC = () => {
    return (
        <div className={styles.articles_container}>
            <h1>Articles</h1>
            <Link href="/articles/1">
                <div className={styles.article_card}>
                    <Image className={styles.article_image} src="/images/linux.jpg" width={500} height={300}
                           alt="image"/>
                    <h3 className={styles.article_title}>Best Linux Distro for Programming: Top 6 Ranked [2024]</h3>
                    <p className={styles.article_content}></p>
                </div>
            </Link>

            <Link href="/articles/2">
            <div className={styles.article_card}>
                <Image className={styles.article_image} width={500} height={300} src="/images/bitcoin.jpg" alt="image"/>
                <h3 className={styles.article_title}>Best Linux Distro for Programming: Top 6 Ranked [2024]</h3>
                <p className={styles.article_content}></p>
            </div>
            </Link>

            <Link href="/articles/3">
            <div className={styles.article_card}>
                <Image className={styles.article_image} width={500} height={300} src="/images/bitcoin.jpg" alt="image"/>
                <h3 className={styles.article_title}>Best Linux Distro for Programming: Top 6 Ranked [2024]</h3>
                <p className={styles.article_content}></p>
            </div>
            </Link>
            <Link href="/articles/4">
            <div className={styles.article_card}>
                <Image className={styles.article_image} width={500} height={300} src="/images/bitcoin.jpg" alt="image"/>
                <h3 className={styles.article_title}>Best Linux Distro for Programming: Top 6 Ranked [2024]</h3>
                <p className={styles.article_content}></p>
            </div>
            </Link>
        </div>
    )
}

export default Index;