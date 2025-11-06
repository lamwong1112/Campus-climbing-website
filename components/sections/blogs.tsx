"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Placeholder blog data structure - will be replaced with API later
type BlogPost = {
  id: string
  title: string
  description: string
  image: string
  category: string
  readTime: string
}

// Placeholder data - will be replaced with API call
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Mastering the Art of Bouldering: A Beginner's Guide",
    description: "Learn the fundamental techniques and safety tips for starting your bouldering journey...",
    image: "https://res.cloudinary.com/dea6bl2fy/image/upload/v1761760156/campus-logo_rpzrak.webp",
    category: "TECHNIQUE",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "The Best Climbing Routes for Intermediate Climbers",
    description: "Discover challenging routes that will help you progress from beginner to advanced...",
    image: "https://res.cloudinary.com/dea6bl2fy/image/upload/v1761760156/campus-logo_rpzrak.webp",
    category: "ROUTES",
    readTime: "4 min read",
  },
  {
    id: "3",
    title: "Gear Essentials: What Every Climber Needs",
    description: "A comprehensive guide to choosing the right climbing gear for your adventures...",
    image: "https://res.cloudinary.com/dea6bl2fy/image/upload/v1761760156/campus-logo_rpzrak.webp",
    category: "GEAR",
    readTime: "6 min read",
  },
  {
    id: "4",
    title: "Training Tips from Professional Climbing Coaches",
    description: "Expert advice on building strength, endurance, and technique for climbing...",
    image: "https://res.cloudinary.com/dea6bl2fy/image/upload/v1761760156/campus-logo_rpzrak.webp",
    category: "TRAINING",
    readTime: "7 min read",
  },
  {
    id: "5",
    title: "Community Spotlight: Member Success Stories",
    description: "Inspiring stories from our climbing community members and their achievements...",
    image: "https://res.cloudinary.com/dea6bl2fy/image/upload/v1761760156/campus-logo_rpzrak.webp",
    category: "COMMUNITY",
    readTime: "5 min read",
  },
]

export function BlogsSection() {
  const [visibleRows, setVisibleRows] = useState(1)
  const [columns, setColumns] = useState(1)

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
  const visibleCount = Math.min(blogPosts.length, visibleRows * itemsPerRow)
  const canShowMore = visibleCount < blogPosts.length

  return (
    <section id="blogs" className="relative block min-h-[100svh] w-full bg-background flex items-center justify-center overflow-y-auto py-12 sm:py-16">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-8 sm:mb-12">Blogs</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
          {blogPosts.slice(0, visibleCount).map((post) => (
            <Card key={post.id} className="flex h-full flex-col overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative w-full aspect-video overflow-hidden bg-muted">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>

              <CardContent className="flex flex-col flex-1 p-4 sm:p-6">
                <h3 className="font-bold text-base sm:text-lg mb-2 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-2 flex-1">
                  {post.description}
                </p>

                <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground pt-2 border-t border-border">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {canShowMore && (
          <div className="mt-8 flex justify-center">
            <Button type="button" onClick={() => setVisibleRows((rows) => rows + 1)}>
              More Blogs
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
