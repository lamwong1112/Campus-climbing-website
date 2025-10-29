"use client"

import { useRef, useEffect, useState } from "react"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  // Cloudinary base and transforms
  const srcBase = "https://res.cloudinary.com/dea6bl2fy/video/upload"
  const publicId = "250927_Campus_preview02_soh6mv"
  const mobileTransform = "f_auto,q_auto:eco,vc_auto,c_limit,w_720,h_1280"
  const desktopTransform = "f_auto,q_auto,vc_auto,c_limit,w_1080,h_1920"
  const posterTransform = "so_1,f_auto,q_auto,c_limit,w_1080,h_1920"

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

  // Only load video sources when hero is near/in view
  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: "200px" }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative block h-[100svh] w-full -mt-16 snap-start snap-stop-always overflow-hidden">
      {/* Video Background */}
      <div ref={containerRef} className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover sm:object-contain md:object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={`${srcBase}/${posterTransform}/${publicId}.jpg`}
          aria-hidden="true"
        >
          {isInView && (
            <>
              <source
                media="(max-width: 768px)"
                src={`${srcBase}/${mobileTransform.replace("f_auto", "f_webm").replace("vc_auto", "vc_vp9")}/${publicId}.webm`}
                type="video/webm"
              />
              <source
                media="(max-width: 768px)"
                src={`${srcBase}/${mobileTransform.replace("f_auto", "f_mp4").replace("vc_auto", "vc_h264")}/${publicId}.mp4`}
                type="video/mp4"
              />
              <source
                src={`${srcBase}/${desktopTransform.replace("f_auto", "f_webm").replace("vc_auto", "vc_vp9")}/${publicId}.webm`}
                type="video/webm"
              />
              <source
                src={`${srcBase}/${desktopTransform.replace("f_auto", "f_mp4").replace("vc_auto", "vc_h264")}/${publicId}.mp4`}
                type="video/mp4"
              />
            </>
          )}
        </video>
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


