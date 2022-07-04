import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import BlogPost from "../components/BlogPost";
import { AppWrap } from "../components/AppWrap";

const Blog = ({ posts }) => {
  return (
    <div id="articles%20&%20case%20studies">
      Blog
      {posts.map((post, index) => {
        return <BlogPost key={index} post={post} />;
      })}
    </div>
  );
};

// export default AppWrap(Blog, "articles & case studies");
export default Blog;
