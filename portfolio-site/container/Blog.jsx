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
    <>
      <div className={styles["app__container"]}>
        <SocialMedia />
        <div className={`${styles["app__wrapper"]} `}>
          {/* one above might be the replacement wrapper */}
          <h2 className={`${styles["head-text"]} ${styles["articles-header"]}`}>
            Articles & <span>Case Studies</span>
          </h2>
          <div id="articles%20&%20case%20studies">
            <motion.div
              transition={{ duration: 0.5, delayChildren: 0.5 }}
              className={styles["app__work-portfolio"]}
            >
              {posts.map((post, index) => {
                return <BlogPost key={index} post={post} />;
              })}
            </motion.div>
          </div>
        </div>
        <NavigationDots active="articles & case studies" />
      </div>
    </>
  );
};

// export default AppWrap(Blog, "articles & case studies");
export default Blog;
