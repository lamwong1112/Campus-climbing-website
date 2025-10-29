"use client"

import { useEffect, useMemo, useRef } from "react"
import gsap from "gsap"

type AnimatedHeadlineProps = {
  lines: string[]
  className?: string
}

export function AnimatedHeadline({ lines, className }: AnimatedHeadlineProps) {
  const rootRef = useRef<HTMLDivElement | null>(null)

  const wordsByLine = useMemo(() => {
    return lines.map((line) => {
      // Keep entire CJK line together as a single word container if there are no spaces
      return line.includes(" ") ? line.split(" ") : [line]
    })
  }, [lines])

  useEffect(() => {
    if (!rootRef.current) return
    const ctx = gsap.context(() => {
      const chars = rootRef.current!.querySelectorAll<HTMLElement>(".ah-char")
      gsap.fromTo(
        chars,
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 0.6,
          stagger: 0.03,
          delay: 0.1,
        }
      )
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef} className={className}>
      {wordsByLine.map((words, lineIdx) => (
        <div key={`line-${lineIdx}`} className="leading-tight">
          {words.map((word, wordIdx) => (
            <span
              key={`word-${lineIdx}-${wordIdx}`}
              className="inline-block overflow-hidden align-bottom mr-2 last:mr-0"
            >
              <span className="inline-block">
                {Array.from(word).map((ch, charIdx) => (
                  <span key={`char-${lineIdx}-${wordIdx}-${charIdx}`} className="ah-char inline-block will-change-transform">
                    {ch}
                  </span>
                ))}
              </span>
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}





