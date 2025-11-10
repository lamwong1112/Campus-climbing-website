import Image from "next/image"
import { notFound } from "next/navigation"
import { groq } from "next-sanity"

import { client } from "@/sanity/lib/client"

type BlogPost = {
  title: string
  description?: string
  body?: string
  image?: string
  category?: string
  readTime?: string
  publishedAt?: string
}

const BLOG_POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "description": coalesce(excerpt, description, ""),
  "body": body,
  "image": mainImage.asset->url,
  "category": category->title,
  readTime,
  publishedAt
}`

const BLOG_SLUGS_QUERY = groq`*[_type == "post" && defined(slug.current)]{
  "slug": slug.current
}`

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(BLOG_SLUGS_QUERY)
  return slugs.map(({ slug }) => ({ slug }))
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await client.fetch<BlogPost | null>(BLOG_POST_QUERY, { slug })

  if (!post) {
    notFound()
  }

  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-12 sm:py-16">
      <header className="flex flex-col gap-4">
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {post.category ?? "Blog"}
        </span>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{post.title}</h1>
        {(post.readTime || post.publishedAt) && (
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            {post.publishedAt && (
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            )}
            {post.readTime && <span>• {post.readTime}</span>}
          </div>
        )}
      </header>

      {post.image && (
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl border border-border/40">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>
      )}

      {post.description && (
        <p className="text-base leading-relaxed text-muted-foreground">{post.description}</p>
      )}

      {post.body && (
        <div className="prose prose-invert max-w-none prose-headings:font-semibold prose-p:text-muted-foreground">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {(post.body as any[]).map((block, index) => {
            if (block._type === "block") {
              return (
                <p key={block._key ?? index} className="mb-4 text-base leading-relaxed text-muted-foreground">
                  {block.children?.map((child: { text: string }) => child.text).join("")}
                </p>
              )
            }

            return null
          })}
        </div>
      )}
    </article>
  )
}

