import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

export default function Blog({ posts }) {
  return (
    <div>
      {console.log("running TOPTOPTOP?")}
      Blog
      {console.log(`${posts} this is posts right now`)}
      {/* {posts.map((post) => {
        const { slug, frontmatter } = post;

        const { title, author, category, date, bannerImage, tags } =
          frontmatter;
        return (
          <article key={title}>
            <Link href={`/posts/${slug}`}>
              <h1>{title}</h1>
            </Link>
            <h3>{author}</h3>
            <h3>{date}</h3>
          </article>
        );
      })} */}
    </div>
  );
}

// //Generating the Static Props for the Blog Page
// export async function getStaticProps() {
//   // // get list of files from the posts folder
//   // const files = fs.readdirSync("../content/articles");

//   // // get frontmatter & slug from each post
//   // const posts = files.map((fileName) => {
//   //   const slug = fileName.replace(".md", "");
//   //   const readFile = fs.readFileSync(
//   //     `../content/articles/${fileName}`,
//   //     "utf-8"
//   //   );
//   //   const { data: frontmatter } = matter(readFile);

//   //   return {
//   //     slug,
//   //     frontmatter,
//   //   };
//   // });

//   // Return the pages static props
//   return {
//     props: {
//       posts: ["hello"],
//     },
//   };
// }
