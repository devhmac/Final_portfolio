import fs from 'fs'
import matter from 'gray-matter'
import Head from 'next/head'
import { marked } from 'marked'
import Link from 'next/link'
import styles from '../../styles/Slug.module.scss'

export default function PostPage({ frontmatter: { title, date, author, bannerImage }, slug, content }) {

  return (
    <>
      <Head>


      </Head>

      <div className={styles['blog-container']}>
        <div className={`${styles.card} ${styles['card-page']}`}>
          <img alt="post-image" className={styles['post-image']} src={bannerImage} />
          <h1 className={styles['post-title']}>{title}</h1>
          <p>{author}</p>
          <div className={`${styles['post-date']} ${styles['p-text']}`}> Posted on {date}</div>
          <div className={styles['post-body']}>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
        </div>
      </div>
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