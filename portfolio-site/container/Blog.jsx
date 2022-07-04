import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

function Blog() {
  return <div>Blog</div>;
}

export default Blog;

//Static props for blog articles
export async function getStaticProps() {
  //get files from content folder
  const files = fs.readdirSync("content/articles");

  //get frontmatter&slug from each post
  const post = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`content/articles/${fileName}`);
    const { data: frontmatter } = matter(readFile);

    return { slug, frontmatter };
  });

  return { props: { posts } };
}
