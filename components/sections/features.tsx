"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

const wallImage = "https://res.cloudinary.com/dea6bl2fy/image/upload/v1762424984/the-wall-background-690c7875dc853_lurhbf.webp"

export function FeaturesSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let isDragging = false
    let startX = 0
    let scrollStart = 0

    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType === "touch") return
      event.preventDefault()
      isDragging = true
      startX = event.clientX
      scrollStart = container.scrollLeft
      container.classList.add("cursor-grabbing")
      container.setPointerCapture(event.pointerId)
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (!isDragging || event.pointerType === "touch") return
      event.preventDefault()
      const delta = (event.clientX - startX) * 1.8
      container.scrollLeft = scrollStart - delta
    }

    const endDrag = (event: PointerEvent) => {
      if (event.pointerType === "touch") return
      isDragging = false
      container.classList.remove("cursor-grabbing")
      container.releasePointerCapture(event.pointerId)
    }

    container.addEventListener("pointerdown", handlePointerDown)
    container.addEventListener("pointermove", handlePointerMove)
    container.addEventListener("pointerup", endDrag)
    container.addEventListener("pointercancel", endDrag)
    container.addEventListener("pointerleave", endDrag)

    return () => {
      container.removeEventListener("pointerdown", handlePointerDown)
      container.removeEventListener("pointermove", handlePointerMove)
      container.removeEventListener("pointerup", endDrag)
      container.removeEventListener("pointercancel", endDrag)
      container.removeEventListener("pointerleave", endDrag)
    }
  }, [])

  return (
    <section
      id="walls"
      className="relative block min-h-[100svh] w-full bg-background flex items-start justify-center py-12 sm:py-16"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-end md:justify-between mb-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">The Walls</h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground">
              Pan across the panorama to preview our routes from overhang, 8 degree to slab zones.
            </p>
          </div>
          <span className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="size-2 rounded-full bg-muted-foreground/70" /> Drag sideways to explore
          </span>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="group overflow-x-auto overflow-y-hidden rounded-3xl border border-border/50 bg-card/40 shadow-inner scrollbar-thin scrollbar-thumb-border/40 scrollbar-track-transparent cursor-grab"
          >
            <div className="relative h-[400px] sm:h-[420px] lg:h-[480px]">
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background via-background/70 to-transparent" />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background via-background/70 to-transparent" />
              <div className="relative h-full min-w-[1024px]">
                <Image
                  src={wallImage}
                  alt="Panoramic view of Campus climbing walls"
                  width={3072}
                  height={1080}
                  priority
                  className="h-full w-auto max-w-none select-none object-contain"
                />
              </div>

              <div className="absolute inset-x-0 bottom-6">
              </div>
              <div className="absolute bottom-12 left-9 flex items-center gap-2 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-md backdrop-blur">
                <span>⇠</span>
                Swipe to explore
                <span>⇢</span>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs text-muted-foreground sm:flex">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-1 backdrop-blur">
              Swipe right
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4">
                <path d="M7 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}


