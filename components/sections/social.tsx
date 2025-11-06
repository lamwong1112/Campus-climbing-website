"use client"

import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Play } from "lucide-react"

type SocialPostType = "image" | "thread" | "video" | "mood"

type SocialPost = {
  id: string
  type: SocialPostType
  author: string
  handle: string
  time: string
  content: string
  reactions: number
  comments: number
  image?: string
  mood?: string
  emoji?: string
  videoDuration?: string
}

const socialPosts: SocialPost[] = [
  {
    id: "1",
    type: "image",
    author: "Ava Lau",
    handle: "@avalifts",
    time: "3h ago",
    content: "New comp set drop on the north wall. Who’s projecting the purple dyno?",
    image: "https://res.cloudinary.com/dea6bl2fy/image/upload/v1762270790/photo-2025-11-04-233746-690a1e301a311_o1mdcx.webp",
    reactions: 128,
    comments: 14,
  },
  {
    id: "2",
    type: "thread",
    author: "Noah Chan",
    handle: "@noahmoves",
    time: "5h ago",
    content: "Beta request! On the slab circuit Level 3, I’m struggling with the high-step after the second crimp. Any tall climbers have a heel hook alternative?",
    reactions: 78,
    comments: 22,
  },
  {
    id: "3",
    type: "video",
    author: "Mia Torres",
    handle: "@miadors",
    time: "1d ago",
    content: "Campus strength session using offset pull-ups. Add this burnout finisher to your routine!",
    image: "https://res.cloudinary.com/dea6bl2fy/image/upload/v1761760156/campus-logo_rpzrak.webp",
    videoDuration: "0:42",
    reactions: 95,
    comments: 11,
  },
]

export function SocialSection() {
  return (
    <section
      id="social"
      className="relative block min-h-[100svh] w-full bg-background flex items-start justify-center snap-start snap-stop-always py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-4 md:px-6 lg:px-8 w-full">
        <div className="max-w-3xl mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Social</h2>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/60 bg-card/60 px-4 py-5 sm:px-6">
          <div>
            <p className="text-sm font-semibold text-foreground">Want the full feed?</p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Members get daily drops, beta exchanges, session invites, and coaches on standby.
            </p>
          </div>
          <Button asChild size="lg" className="min-w-[160px]" aria-label="Join the members-only social platform">
            <a href="/join">Join the community</a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {socialPosts.map((post) => (
            <Card
              key={post.id}
              className="flex h-full min-h-[420px] sm:min-h-[440px] lg:min-h-[460px] flex-col overflow-hidden border-border/60 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/75"
            >
              <CardContent className="flex flex-1 flex-col gap-4 p-4 sm:p-6">
                {post.type === "image" && post.image && (
                  <div className="relative h-56 overflow-hidden rounded-xl">
                    <Image
                      src={post.image}
                      alt={post.content}
                      width={640}
                      height={800}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
                      <span>Highlights</span>
                      <Badge variant="secondary" className="rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wide">
                        Image
                      </Badge>
                    </div>
                  </div>
                )}

                {post.type === "video" && post.image && (
                  <div className="group relative h-56 overflow-hidden rounded-xl">
                    <Image
                      src={post.image}
                      alt={post.content}
                      width={640}
                      height={800}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-background/20 via-transparent to-background/80 p-3">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <Badge variant="secondary" className="rounded-full px-2 py-0.5 uppercase tracking-wide">
                          Video
                        </Badge>
                        <span className="rounded-full bg-background/70 px-2 py-0.5 text-[11px] font-medium">
                          {post.videoDuration}
                        </span>
                      </div>
                      <Play className="mx-auto mb-6 size-10 text-background drop-shadow-lg" />
                    </div>
                  </div>
                )}

                {post.type === "mood" && (
                  <div className="flex h-56 flex-col justify-center rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-5 text-center">
                    <div className="text-4xl sm:text-5xl mb-3">{post.emoji}</div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
                      {post.mood}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{post.content}</p>
                  </div>
                )}

                {(post.type === "thread" || post.type === "mood" || post.type === "video" || post.type === "image") && (
                  <div className="flex items-center gap-3">
                    <Avatar className="size-9 border border-border/60">
                      <AvatarImage src={post.image} alt={post.author} />
                      <AvatarFallback>{post.author.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground">{post.author}</p>
                      <p className="text-xs text-muted-foreground">{post.handle} • {post.time}</p>
                    </div>
                    <Badge variant="outline" className="ml-auto rounded-full text-[10px] uppercase tracking-wide">
                      {post.type}
                    </Badge>
                  </div>
                )}

                {post.type === "thread" && (
                  <p className="text-sm text-muted-foreground line-clamp-4 leading-relaxed">
                    {post.content}
                  </p>
                )}

                {(post.type === "image" || post.type === "video") && (
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {post.content}
                  </p>
                )}

                {post.type === "mood" && (
                  <div className="rounded-xl border border-dashed border-border/60 p-3 text-center text-xs text-muted-foreground">
                    Share your vibe for the day with quick emoji drops.
                  </div>
                )}

                <div className="mt-auto flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1 font-medium">
                    <Heart className="size-4" />
                    {post.reactions}
                  </span>
                  <span className="inline-flex items-center gap-1 font-medium">
                    <MessageCircle className="size-4" />
                    {post.comments}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

