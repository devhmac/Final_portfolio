import Link from "next/link";

const BlogPost = ({ post }) => {
  const { slug, frontmatter } = post;

  const { title, author, excerpt, category, date, bannerImage, tags } =
    frontmatter;

  return (
    <article key={title}>
      <Link href={`/articles/${slug}`}>
        <h1>{title}</h1>
      </Link>
      <p>{excerpt}</p>
      <h3>{author}</h3>
      <h3>{date}</h3>
    </article>
  );
};

export default BlogPost;
