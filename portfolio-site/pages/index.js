import fs from 'fs';
import matter from "gray-matter"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'

import { About, Header, Work, Blog } from '../container/containerIndex'


export default function Home(props) {

  return (
    <div>
      <Head>
        <title>Devin MacGillivray</title>
        <meta name="Portfolio" content="Devin MacGillivrays Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.app}>
        {/* <Navbar /> */}
        <Header />
        <About />
        <Work />
        <Blog
          posts={props.posts}
        />

      </div>
    </div>
  )
}

export async function getStaticProps() {

  //gets from directory
  const files = fs.readdirSync('content/articles')

  //get slug & frontmatter

  const posts = files.map(filename => {

    //creating slug
    const slug = filename.replace('.md', '')
    //frontmatter
    const markdownWithMeta = fs.readFileSync(`content/articles/${filename}`, 'utf-8')
    const { data: frontmatter } = matter(markdownWithMeta)

    return { slug, frontmatter }
  })


  return {
    props: { posts, },

  }
}