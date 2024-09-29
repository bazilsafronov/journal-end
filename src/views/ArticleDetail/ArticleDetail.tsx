import styles from "./ArticleDetail.module.sass";
const ArticleDetail = () => {
    return (
        <div>
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
                        <a href="/public">Programming</a>
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
                    12 Best React Courses in 2024 [Free + Paid] | Beginner to Pro
                </h1>
                <section className={styles.social}>
                    <a href="">
          <span>
            <img src="/tg.svg" height={36} width={36} alt="tg" />
          </span>
                    </a>
                    <a href="">
          <span>
            <img src="/twitter.svg" height={36} width={36} alt="tg" />
          </span>
                    </a>
                    <a href="">
          <span>
            <img src="/inst.svg" height={36} width={36} alt="tg" />
          </span>
                    </a>
                    <a href="">
          <span>
            <img src="/wats.svg" height={36} width={36} alt="tg" />
          </span>
                    </a>
                </section>
                <img className={styles.image} src="/reactjs.jpg" alt="image" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laudantium officia fugiat numquam provident rem obcaecati odio, in quo quas amet molestiae enim accusantium, velit eveniet aspernatur voluptatibus. Odit, voluptates.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laudantium officia fugiat numquam provident rem obcaecati odio, in quo quas amet molestiae enim accusantium, velit eveniet aspernatur voluptatibus. Odit, voluptates.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laudantium officia fugiat numquam provident rem obcaecati odio, in quo quas amet molestiae enim accusantium, velit eveniet aspernatur voluptatibus. Odit, voluptates.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laudantium officia fugiat numquam provident rem obcaecati odio, in quo quas amet molestiae enim accusantium, velit eveniet aspernatur voluptatibus. Odit, voluptates.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laudantium officia fugiat numquam provident rem obcaecati odio, in quo quas amet molestiae enim accusantium, velit eveniet aspernatur voluptatibus. Odit, voluptates.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laudantium officia fugiat numquam provident rem obcaecati odio, in quo quas amet molestiae enim accusantium, velit eveniet aspernatur voluptatibus. Odit, voluptates.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laudantium officia fugiat numquam provident rem obcaecati odio, in quo quas amet molestiae enim accusantium, velit eveniet aspernatur voluptatibus. Odit, voluptates.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laudantium officia fugiat numquam provident rem obcaecati odio, in quo quas amet molestiae enim accusantium, velit eveniet aspernatur voluptatibus. Odit, voluptates.
                </p>
            </div>
        </div>
    );
};

export default ArticleDetail;
