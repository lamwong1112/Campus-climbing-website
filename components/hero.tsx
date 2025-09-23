import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedHeadline } from "@/components/animated/AnimatedHeadline"

export function Hero() {
  return (
    <section className="relative h-[100svh] w-full">
      {/* Background hook for unicorn.studio interactive layer */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://panpa.hk/wp-content/uploads/2022/06/Campus-Climbing-gallery-1.jpeg')",
        }}
      />

      {/* Content aligned bottom-left; container matches navbar for perfect alignment */}
      <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-end">
        <div className="pb-20 sm:pb-24 md:pb-28">
          <div className="inline-block rounded-lg bg-background/75 backdrop-blur-sm p-4 sm:p-6 shadow-lg ring-1 ring-border/50">
            <div
              role="heading"
              aria-level={1}
              className="text-balance text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight max-w-[20ch]"
            >
              <AnimatedHeadline lines={["佐敦抱石", "Bouldering gym in Jordan"]} />
            </div>
            <div className="mt-6">
              <Button asChild size="lg">
                <Link href="#join">climb it out</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


