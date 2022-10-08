import fs from 'fs'
import matter from 'gray-matter'
import Head from 'next/head'
import { marked } from 'marked'

import MarkdownIt from 'markdown-it'

import Link from 'next/link'
import styles from '../../styles/Slug.module.scss'

const md = new MarkdownIt('commonmark')

export default function PostPage({ frontmatter: { title, date, author, bannerImage, excerpt }, slug, content }) {
  return (
    <>
      <Head>
        <title>{`${title} | Devin MacGillivray`}</title>
        <meta charSet="utf-8" />
        <meta property="og:title" content={`${title} | Devin MacGillivray`} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:image" content={bannerImage} />
        <meta name="twitter:card" content={`${bannerImage}`} />
        <meta name="Portfolio" content="Devin MacGillivrays Portfolio" />

      </Head>

      <div className={styles['blog-container']}>
        <div className={`${styles.card} ${styles['card-page']}`}>
          <img alt="post-image" className={styles['post-image']} src={bannerImage} />
          <h1 className={styles['post-title']}>{title}</h1>
          <p>{author}</p>
          <div className={`${styles['post-date']} ${styles['p-text']}`}> Posted on {date}</div>
          <div className={styles['post-body']}>
            <div dangerouslySetInnerHTML={{ __html: md.render(content) }}></div>
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