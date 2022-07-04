import fs from 'fs'

export default function PostPage() {
  return (
    <div> thi iis a pthisdhofhsdiofhsoidhfiosdhfoihsdiohfiohsd post <br /> hello</div>
  )
}

export async function getStaticPaths() {

  const files = fs.readdirSync('content/articles')

  const paths = files.map(filename => ({
    params: { slug: filename.replace('.md', '') }
  }))

  console.log(paths)

  return {
    paths,
    fallback: false
  }

}
export async function getStaticProps() {

  return {
    props: {}
  }

}