"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import gsap from "gsap"

const photos: string[] = [
  "/globe.svg",
  "/next.svg",
  "/vercel.svg",
  "/window.svg",
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll("[data-gallery-slide]"),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.08 }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="classes" className="py-20 sm:py-24 bg-accent/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Gallery</h2>
          <p className="text-muted-foreground mt-2">Drop in your photos — carousel ready.</p>
        </div>

        <div className="mt-10">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {photos.map((src, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="relative aspect-[4/3] min-h-[220px] sm:min-h-[260px] overflow-hidden rounded-lg border bg-muted block w-full" data-gallery-slide>
                          <Image src={src} alt={`gallery-${i}`} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" priority unoptimized />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-3xl p-0" showCloseButton>
                        <DialogTitle className="sr-only">Gallery image {i + 1}</DialogTitle>
                        <div className="relative aspect-[4/3] w-full bg-black min-h-[320px]">
                          <Image src={src} alt={`gallery-large-${i}`} fill className="object-contain" sizes="100vw" priority unoptimized />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}


