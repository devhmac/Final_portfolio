import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import BlogPost from "../components/BlogPost";

import styles from "../styles/Home.module.scss";

const Blog = ({ posts }) => {
  return (
    <>
      <h2 className={styles["head-text"]}>
        Articles & <span>Case Studies</span>
      </h2>
      <div id="articles%20&%20case%20studies">
        Blog
        {posts.map((post, index) => {
          return <BlogPost key={index} post={post} />;
        })}
      </div>
    </>
  );
};

// export default AppWrap(Blog, "articles & case studies");
export default Blog;
