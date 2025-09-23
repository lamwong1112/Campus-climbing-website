"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

type Testimonial = {
  name: string
  quote: string
  avatar?: string
}

const ROW_A: Testimonial[] = Array.from({ length: 10 }).map((_, i) => ({
  name: `Climber ${i + 1}`,
  quote: "Amazing routes and friendly staff. Five stars!",
  avatar: `https://i.pravatar.cc/100?img=${i + 1}`,
}))

const ROW_B: Testimonial[] = Array.from({ length: 10 }).map((_, i) => ({
  name: `Member ${i + 11}`,
  quote: "Best bouldering gym in Jordan — highly recommend.",
  avatar: `https://i.pravatar.cc/100?img=${i + 21}`,
}))

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
  return (
    <Card className="tm-card min-w-[280px] max-w-[320px] opacity-0 will-change-transform">
      <CardContent className="pt-6">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={t.avatar} alt={t.name} />
            <AvatarFallback>{t.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium leading-none">{t.name}</div>
            <Stars />
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">“{t.quote}”</p>
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
        rowA,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, ease: "power2.out", duration: 0.6, stagger: 0.08 },
        0
      ).fromTo(
        rowB,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, ease: "power2.out", duration: 0.6, stagger: 0.08 },
        0.15
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-16">
      <div className="overflow-hidden">
        <div className="tm-row tm-row-a flex gap-4 animate-marquee-left will-change-transform">
          {[...ROW_A, ...ROW_A].map((t, idx) => (
            <TestimonialCard key={`a-${idx}-${t.name}`} t={t} />
          ))}
        </div>
      </div>
      <div className="mt-6 overflow-hidden">
        <div className="tm-row tm-row-b flex gap-4 animate-marquee-right will-change-transform">
          {[...ROW_B, ...ROW_B].map((t, idx) => (
            <TestimonialCard key={`b-${idx}-${t.name}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}


