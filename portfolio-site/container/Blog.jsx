import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import BlogPost from "../components/BlogPost";

export default function Blog({ posts }) {
  return (
    <div>
      Blog
      {posts.map((post, index) => {
        return <BlogPost key={index} post={post} />;
      })}
    </div>
  );
}
