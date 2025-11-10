"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { groq } from "next-sanity"
import Link from "next/link"

import { client } from "@/sanity/lib/client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type BlogPost = {
  _id: string
  title: string
  description: string
  slug: string
  image?: string
  category?: string
  readTime?: string
}

const BLOGS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  "description": coalesce(excerpt, description, ""),
  "image": mainImage.asset->url,
  "category": category->title,
  readTime
}`

export function BlogsSection() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [visibleRows, setVisibleRows] = useState(1)
  const [columns, setColumns] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await client.fetch<BlogPost[]>(BLOGS_QUERY)
        setPosts(data)
      } catch (error) {
        console.error("Failed to load blog posts from Sanity:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  useEffect(() => {
    const determineColumns = () => {
      const width = window.innerWidth
      if (width >= 1280) {
        setColumns(4)
        return
      }
      if (width >= 1024) {
        setColumns(3)
        return
      }
      if (width >= 640) {
        setColumns(2)
        return
      }
      setColumns(1)
    }

    determineColumns()
    window.addEventListener("resize", determineColumns)
    return () => window.removeEventListener("resize", determineColumns)
  }, [])

  const itemsPerRow = columns || 1
  const visibleCount = Math.min(posts.length, visibleRows * itemsPerRow)
  const canShowMore = visibleCount < posts.length

  const visiblePosts = posts.slice(0, visibleCount)

  return (
    <section id="blogs" className="relative block min-h-[100svh] w-full bg-background flex items-center justify-center overflow-y-auto py-12 sm:py-16">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-8 sm:mb-12">Blogs</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
          {visiblePosts.map((post) => (
            <Link key={post._id} href={`/${post.slug}`} className="group">
              <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
                <div className="relative w-full aspect-video overflow-hidden bg-muted">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title ?? "Blog cover"}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                </div>

                <CardContent className="flex flex-col flex-1 p-4 sm:p-6">
                  <h3 className="font-bold text-base sm:text-lg mb-2 line-clamp-2">
                    {post.title ?? "Untitled post"}
                  </h3>

                  <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-2 flex-1">
                    {post.description ?? "Post description coming soon."}
                  </p>

                  <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground pt-2 border-t border-border">
                    <span>{post.category ?? "General"}</span>
                    <span>{post.readTime ?? ""}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {!isLoading && canShowMore && (
          <div className="mt-8 flex justify-center">
            <Button type="button" onClick={() => setVisibleRows((rows) => rows + 1)}>
              More Blogs
            </Button>
          </div>
        )}

        {!isLoading && posts.length === 0 && (
          <p className="mt-8 text-center text-sm text-muted-foreground">No blog posts yet. Check back soon!</p>
        )}
      </div>
    </section>
  )
}
