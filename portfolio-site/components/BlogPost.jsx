import Link from "next/link";
import styles from "../styles/BlogPost.module.scss";

const BlogPost = ({ post }) => {
  const { slug, frontmatter } = post;

  const { title, author, excerpt, category, date, bannerImage, tags } =
    frontmatter;

  return (
    <article key={title} className={styles["app__work-item"]}>
      <div className={`${styles["app__work-img"]} ${styles["app__flex"]}`}>
        <img src={bannerImage} alt="" />
      </div>
      <div className={`${styles["app__work-content"]} ${styles["app__flex"]}`}>
        <Link href={`/articles/${slug}`}>
          <h1 className={`${styles["bold-text"]} ${styles["read-link"]}`}>
            {title}
          </h1>
        </Link>
        <p className={styles["p-text"]}>{excerpt}</p>

        <Link href={`/articles/${slug}`}>
          <a className={`${styles["p-text"]} ${styles["see-more-link"]}`}>
            Read More
          </a>
        </Link>
      </div>
    </article>
  );
};

export default BlogPost;
