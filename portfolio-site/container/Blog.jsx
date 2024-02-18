import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import BlogPost from "../components/BlogPost";
import { motion } from "framer-motion";
import { NavigationDots, SocialMedia } from "../components/componentsIndex";

import styles from "../styles/Work.module.scss";

const Blog = ({ posts }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className={styles["app__container"]}
    >
      {/* <SocialMedia /> */}
      <div className={`${styles["app__wrapper"]} `}>
        {/* one above might be the replacement wrapper */}
        <div className={` ${styles["articles-header"]}`}>
          <h2 className={styles["head-text"]}>
            Articles & <span>Posts</span>
          </h2>
          {/* <p className={styles["sub-head"]}>
              See more on my <a href="https://blog.devhmac.com/"> blog</a>
            </p> */}
        </div>

        <div id="articles%20&%20posts">
          <motion.div
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className={styles["app__work-portfolio"]}
          >
            {posts.map((post, index) => {
              return (
                post.frontmatter.display && <BlogPost key={index} post={post} />
              );
            })}
          </motion.div>
        </div>
      </div>
      <NavigationDots active="articles & posts" />
    </motion.div>
  );
};

// export default AppWrap(Blog, "articles & case studies");
export default Blog;
