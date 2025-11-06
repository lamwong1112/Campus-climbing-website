"use client"

import { useEffect, useRef } from "react"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateBackgroundPosition = () => {
      if (bgRef.current) {
        if (window.innerWidth >= 768) {
          bgRef.current.style.backgroundPosition = 'center 26%'
        } else {
          bgRef.current.style.backgroundPosition = 'right center'
        }
      }
    }

    updateBackgroundPosition()
    window.addEventListener('resize', updateBackgroundPosition)
    return () => window.removeEventListener('resize', updateBackgroundPosition)
  }, [])

  return (
    <footer className="relative block h-[100svh] w-full border-t">
      <div className="w-full px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end gap-4 py-10">
        <div 
          ref={bgRef}
          className="rounded-xl border text-card-foreground p-8 sm:p-12 relative overflow-hidden min-h-[320px] flex-1 flex flex-col justify-center" 
          style={{ backgroundImage: 'url(https://res.cloudinary.com/dea6bl2fy/image/upload/v1762270790/photo-2025-11-04-233746-690a1e301a311_o1mdcx.webp)', backgroundSize: 'cover', backgroundPosition: 'right center' }}
        >
          <div className="absolute inset-0 bg-black/40 z-0" />
            <div className="max-w-3xl md:max-w-4xl mx-auto text-center space-y-6 md:space-y-8 relative z-10">
            <p className="text-base sm:text-lg md:text-xl font-semibold tracking-[0.12em] uppercase text-white">Ready to climb with us?</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white">
              See You at the Top!
            </h2>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button asChild size="lg" className="min-w-[160px]">
                <Link href="/join">Join up</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="min-w-[160px]">
                <Link href="/#membership">View membership</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full py-6 text-sm text-muted-foreground flex items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Campus Climbing</p>
          <p>Level 1, 600 Canton Road, Jordan, Hong Kong</p>
        </div>
      </div>
    </footer>
  );
}



