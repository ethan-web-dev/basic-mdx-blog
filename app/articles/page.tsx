import Posts from '../(interstitials)/components/blog/Posts'

export const revalidate = 86400

export default function Articles() {
  return (
    <article>
      <p>Articles</p>
          
      {/* @ts-expect-error Server Component */}
      <Posts />
    </article>
  )
}