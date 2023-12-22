import getFormattedDate from '@/lib/getFormattedDate'
import { getPostsMeta, getPostByName } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export const revalidate = 86400

type Props = {
  params: {
    postId: string
  }
}

export async function generateStaticParams() {
  const posts = await getPostsMeta() //deduped!

  if (!posts) return []

  return posts.map((post) => ({
    postId: post.id
  }))
}

export async function generateMetadata({ params: { postId } }: Props) {

  const post = await getPostByName(`${postId}.mdx`) //deduped!

  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: post.meta.title,
  }
}

export default async function Post({ params: { postId } }: Props) {

  const post = await getPostByName(`${postId}.mdx`) //deduped!

  if (!post) notFound()

  const { meta, content } = post

  const pubDate = getFormattedDate(meta.date)

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>{tag}</Link>
  ))

  return (
    <>
      <h2 className="text-4xl font-thin mt-12">{meta.title}</h2>
      <p className="ml-3 mt-5 text-xs text-start flex flex-col px-1.5 py-0.5 bg-secondary text-primary dark:bg-primary dark:text-secondary rounded-sm max-w-fit">
        <span>Published: {pubDate}</span>
      </p>
      <article className="self-center prose dark:prose-invert mt-16 mb-28 max-w-fit md:mx-3">
        {content}
      </article>
      <section className="mb-20 flex flex-col gap-4">
        <p className="text-center">Read similar articles to <span className="italic">{meta.title}</span> based on  common topics:</p>
        <div className="flex flex-wrap gap-4 w-fit justify-center self-center my-6 mx-20 text-sm">
          {tags}
        </div>
      </section>
      <p className="mb-10">
        <Link className="hover:underline" href="/articles">← Back to Articles</Link>
      </p>
    </>
  )
}