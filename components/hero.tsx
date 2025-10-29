export function Hero() {
  return (
    <section className="relative block h-[100svh] w-full -mt-16 snap-start snap-stop-always">
      {/* Background hook for unicorn.studio interactive layer */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://panpa.hk/wp-content/uploads/2022/06/Campus-Climbing-gallery-1.jpeg')",
        }}
      />
    </section>
  )
}


