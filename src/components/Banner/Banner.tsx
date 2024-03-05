import styles from "./Banner.module.sass";
const Banner = () => {
  return (
    <div className={styles.banner}>
      <p>
        Get discounts on data, AI, and programming courses.{" "}
        <a href="/" style={{textDecoration: "none"}}>
          <span>View offers</span>
        </a>
      </p>
    </div>
  );
};

export default Banner;
