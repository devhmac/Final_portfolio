import Link from "next/link";
import styles from "../styles/BlogPost.module.scss";

const BlogPost = ({ post }) => {
  const { slug, frontmatter } = post;

  const { title, author, excerpt, category, date, bannerImage, tags } =
    frontmatter;

  return (
    <Link href={`/articles/${slug}`}>
      <article key={title} className={styles["app__work-item"]}>
        <div className={`${styles["app__work-img"]} ${styles["app__flex"]}`}>
          <img src={bannerImage} alt="" />
        </div>
        <div
          className={`${styles["app__work-content"]} ${styles["app__flex"]}`}
        >
          <h1 className={`${styles["bold-text"]} ${styles["title-link"]}`}>
            {title}
          </h1>
          <p className={styles["p-text"]}>{excerpt}</p>
          {/* <p className={`${styles["p-text"]} ${styles["post-date"]}`}>{date}</p> */}

          {/* <Link href={`/articles/${slug}`}> */}
          <a className={`${styles["p-text"]} ${styles["see-more-link"]}`}>
            Read More
          </a>
          {/* </Link> */}
        </div>
      </article>
    </Link>
  );
};

export default BlogPost;
