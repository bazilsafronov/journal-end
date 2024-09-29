import React from "react";
import styles from './Articles.module.sass';
import linux from '../../assets/images/linux.jpg';
import bitcoin from '../../assets/images/bitcoin.jpg'
import {Link} from "react-router-dom";

const Articles: React.FC = () => {
    return (
        <div className={styles.articles_container}>
            <h1>Articles</h1>
            <Link to="/articles/id">
            <div className={styles.article_card}>
                <img className={styles.article_image} src={linux} alt="image"/>
                <h3 className={styles.article_title}>Best Linux Distro for Programming: Top 6 Ranked [2024]</h3>
                <p className={styles.article_content}></p>
            </div>
            </Link>
            <Link to="/articles/id">
            <div className={styles.article_card}>
                <img className={styles.article_image} src={bitcoin} alt="image"/>
                <h3 className={styles.article_title}>Best Linux Distro for Programming: Top 6 Ranked [2024]</h3>
                <p className={styles.article_content}></p>
            </div>
                </Link>
            <Link to="/articles/id">
            <div className={styles.article_card}>
                <img className={styles.article_image} src={linux} alt="image"/>
                <h3 className={styles.article_title}>Best Linux Distro for Programming: Top 6 Ranked [2024]</h3>
                <p className={styles.article_content}></p>
            </div>
                </Link>
            <Link to="/articles/id">
            <div className={styles.article_card}>
                <img className={styles.article_image} src={bitcoin} alt="image"/>
                <h3 className={styles.article_title}>Best Linux Distro for Programming: Top 6 Ranked [2024]</h3>
                <p className={styles.article_content}></p>
            </div>
                </Link>
        </div>
    )
}

export default Articles;