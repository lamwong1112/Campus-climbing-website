"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

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
  return (
    <section id="blogs" className="relative block min-h-[100svh] w-full bg-background flex items-center justify-center snap-start snap-stop-always overflow-y-auto py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-4 md:px-6 lg:px-8 w-full">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-8 sm:mb-12">Blogs</h2>
        
        {/* Carousel Container */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: false,
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-4 pr-4 md:pr-0">
              {blogPosts.map((post) => (
                <CarouselItem key={post.id} className="pl-4 md:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                    {/* Blog Image */}
                    <div className="relative w-full aspect-video overflow-hidden bg-muted">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                    </div>
                    
                    {/* Card Content */}
                    <CardContent className="flex flex-col flex-1 p-4 sm:p-6">
                      {/* Title */}
                      <h3 className="font-bold text-base sm:text-lg mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-2 flex-1">
                        {post.description}
                      </p>
                      
                      {/* Metadata */}
                      <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground pt-2 border-t border-border">
                        <span>{post.category}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
