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
      <h2 className="text-4xl font-bold">{meta.title}</h2>
      <p className="ml-3 mt-2 text-sm text-start w-fit border px-1 rounded-sm">
        Published: {pubDate}
      </p>
      <article className="prose dark:prose-invert min-h-screen">
        {content}
      </article>
      <section className="pb-20 flex flex-col gap-4">
        <p className="text-center">Read similar articles to <span className="italic">{meta.title}</span> based on  common topics:</p>
        <div className="flex flex-wrap gap-4 w-fit justify-center self-center p-6">
          {tags}
        </div>
      </section>
      <p className="mb-10">
        <Link href="/articles">← Back to Articles</Link>
      </p>
    </>
  )
}