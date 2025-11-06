"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

type Testimonial = {
  name: string
  quote: string
  title?: string
  date?: string
}

const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/)
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  }
  return name.slice(0, 2).toUpperCase()
}

const firstNames = ["Peter", "Kobe", "Cindy", "John", "Mo", "Free", "Travis", "Charles", "Dicky", "Yoko", "Victor", "Oscar", "Ken", "Stella", "Emily"]
const lastInitials = ["M", "C", "C", "J", "L", "F", "Y", "W", "H", "N", "T", "K", "S", "E" ]

// Arrays of quotes for each row
const quotesRowA = [
  "Amazing routes and friendly staff.",
  "The best climbing gym!",
  "Love it here!",
  "Great atmosphere and excellent coaching staff.",
  "Perfect place for beginners.",
  "Well-maintained equipment.",
  "The routes are always fresh and challenging.",
  "Staff are always willing to help.",
  "Best bouldering experience!",
  "Friendly community."
]

const quotesRowB = [
  "Highly recommend.",
  "Top-notch equipment!!!",
  "I have improved so much!",
  "Fantastic community.",
  "Love the variety of routes.",
  "Spacious climbing space.",
  "Knowledgeable staff.",
  "Improve your climbing skills.",
  "Great workout sessions."
]

const titlesRowA = [
  "Great climbing gym!",
  "Best gym ever",
  "Fantastic community",
  "Exceptional coaching",
  "Perfect for everyone",
  "Clean space",
  "Fresh routes",
  "Helpful staff",
  "Top bouldering",
  "Amazing variety"
]

const titlesRowB = [
  "Excellent facility",
  "Top-notch equipment",
  "Exceptional coaching",
  "Great value",
  "Variety of routes",
  "Clean space",
  "Helpful staff",
  "Skill improvement",
  "Great gym",
  "Highly recommend"
]

const ROW_A: Testimonial[] = Array.from({ length: 10 }).map((_, i) => ({
  name: `${firstNames[i]} ${lastInitials[i]}.`,
  quote: quotesRowA[i] || quotesRowA[0],
  title: titlesRowA[i] || titlesRowA[0],
  date: `${String(13 - i).padStart(2, '0')}/03/2024`,
}))

const ROW_B: Testimonial[] = Array.from({ length: 10 }).map((_, i) => {
  // Row A uses firstNames[0-9], so Row B uses firstNames[10-14] (5 unique) + different mapping
  // Since we only have 15 names total, we'll use indices 10-14 first, then cycle differently
  // For indices 0-4: use names 10-14 (unique)
  // For indices 5-9: use names 5-9 but with different last initials to create unique combinations
  const nameIndex = i < 5 ? (10 + i) : (i)
  // Shift initial indices to create different combinations even when names repeat
  const initialIndex = (i + 10) % lastInitials.length
  return {
    name: `${firstNames[nameIndex]} ${lastInitials[initialIndex]}.`,
    quote: quotesRowB[i] || quotesRowB[0],
    title: titlesRowB[i] || titlesRowB[0],
    date: `${String(12 - i).padStart(2, '0')}/03/2024`,
  }
})

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-current" />
      ))}
      <span className="sr-only">5 stars on Google</span>
    </div>
  )
}

function TestimonialCard({ t }: { t: Testimonial }) {
  const initials = getInitials(t.name)
  
  return (
    <Card className="tm-card w-[240px] h-[200px] sm:w-[280px] sm:h-[200px] lg:w-[320px] lg:h-[200px] opacity-0 will-change-transform">
      <CardContent className="pt-6 h-full flex flex-col justify-between">
        <div className="flex items-start gap-3 mb-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-primary text-primary-foreground text-sm font-semibold">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold leading-none text-sm">{t.name}</div>
              <Stars />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          {t.title && (
            <h3 className="font-semibold text-sm mb-4 line-clamp-1">{t.title}</h3>
          )}
          <p className="text-xs text-muted-foreground line-clamp-4 leading-relaxed">{t.quote}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export function TestimonialsMarqueeSection() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      const rowA = gsap.utils.toArray<HTMLElement>(".tm-row-a .tm-card")
      const rowB = gsap.utils.toArray<HTMLElement>(".tm-row-b .tm-card")

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      })

      tl.fromTo(
        [...rowA, ...rowB],
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, ease: "power2.out", duration: 0.6 },
        0
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative block h-[100svh] w-full flex flex-col justify-evenly">
      <div className="w-full overflow-hidden">
        <div className="tm-row tm-row-a flex gap-4 animate-marquee-left will-change-transform">
          {[...ROW_A, ...ROW_A, ...ROW_A, ...ROW_A].map((t, idx) => (
            <TestimonialCard key={`a-${idx}-${t.name}`} t={t} />
          ))}
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div className="tm-row tm-row-b flex gap-4 animate-marquee-right will-change-transform">
          {[...ROW_B, ...ROW_B, ...ROW_B, ...ROW_B].map((t, idx) => (
            <TestimonialCard key={`b-${idx}-${t.name}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}


