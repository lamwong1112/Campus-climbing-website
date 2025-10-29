"use client"

import { useRef, useEffect } from "react"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.loop = true
      const handleEnded = () => {
        if (video) {
          video.currentTime = 0
          video.play()
        }
      }
      video.addEventListener("ended", handleEnded)
      return () => video.removeEventListener("ended", handleEnded)
    }
  }, [])

  return (
    <section className="relative block h-[100svh] w-full -mt-16 snap-start snap-stop-always overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover sm:object-contain md:object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="https://res.cloudinary.com/dea6bl2fy/video/upload/f_auto,q_auto,c_limit,w_1080,h_1920/250927_Campus_preview02_soh6mv"
          aria-hidden="true"
        />
      </div>

      {/* Center Headline */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div
          role="heading"
          aria-level={1}
          className="flex flex-col md:flex-row items-center md:items-end justify-center gap-4 md:gap-10"
        >
          <span className="font-extrabold text-white drop-shadow-xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none">Climbing</span>
          <span className="font-extrabold text-white drop-shadow-xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none">Never</span>
          <span className="font-extrabold text-white drop-shadow-xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none">Stop</span>
        </div>
      </div>
      
      {/* Matte overlay effect */}
      <div className="absolute inset-0 bg-black/40 -z-10" />
    </section>
  )
}


