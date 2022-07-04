import fs from 'fs'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'

export default function PostPage({ frontmatter: { title, date, bannerImage }, slug, content }) {
  return (
    <>
      <Link href='/#articles%20&%20Case%20studies'>
        <a>Go Back</a>
      </Link>
      <img src={bannerImage} />
      <div> WHy are we here</div>
    </>
  )
}

export async function getStaticPaths() {

  const files = fs.readdirSync('content/articles')

  const paths = files.map(filename => ({
    params: { slug: filename.replace('.md', '') }
  }))



  return {
    paths,
    fallback: false
  }

}
export async function getStaticProps({ params: { slug } }) {

  const markdownWithMeta = fs.readFileSync(`content/articles/${slug + '.md'}`, 'utf-8')

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: { frontmatter, slug, content }
  }

}