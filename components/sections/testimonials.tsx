import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Product = {
  id: string
  name: string
  description: string
  price: string
  image: string
}

const products: Product[] = [
  {
    id: "chalk-bag",
    name: "Campus Chalk Bag",
    description: "Durable chalk bag with brush loop and fleece lining for mess-free climbs.",
    price: "$180",
    image: "https://res.cloudinary.com/dea6bl2fy/image/upload/v1762270790/photo-2025-11-04-233746-690a1e301a311_o1mdcx.webp",
  },
  {
    id: "boulder-brush",
    name: "Grip Restore Brush",
    description: "Ergonomic boar’s hair brush that keeps holds clean on every session.",
    price: "$120",
    image: "https://res.cloudinary.com/dea6bl2fy/image/upload/v1761760156/campus-logo_rpzrak.webp",
  },
  {
    id: "campus-tee",
    name: "Campus Classic Tee",
    description: "Soft heavyweight tee with our signature Campus mark and relaxed fit.",
    price: "$320",
    image: "https://res.cloudinary.com/dea6bl2fy/image/upload/v1761760156/campus-logo_rpzrak.webp",
  },
  {
    id: "liquid-chalk",
    name: "Liquid Chalk Booster",
    description: "Fast-drying liquid chalk that delivers long-lasting friction and confidence.",
    price: "$140",
    image: "https://res.cloudinary.com/dea6bl2fy/image/upload/v1761760156/campus-logo_rpzrak.webp",
  },
  {
    id: "training-board",
    name: "Hangboard Trainer",
    description: "Compact hangboard with progressive edges for strength training at home.",
    price: "$680",
    image: "https://res.cloudinary.com/dea6bl2fy/image/upload/v1761760156/campus-logo_rpzrak.webp",
  },
  {
    id: "climbing-journal",
    name: "Climber’s Session Journal",
    description: "Log climbs, beta, and progress with guided prompts and durable binding.",
    price: "$90",
    image: "https://res.cloudinary.com/dea6bl2fy/image/upload/v1761760156/campus-logo_rpzrak.webp",
  },
]

export function TestimonialsSection() {
  return (
    <section
      id="shop"
      className="relative block min-h-[100svh] w-full bg-background flex items-start justify-center snap-start snap-stop-always py-10 sm:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-4 md:px-6 lg:px-8 w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-8 sm:mb-12">Shop</h2>

        <div className="relative">
          <Carousel
            opts={{ align: "start", loop: false, slidesToScroll: 1 }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 lg:-ml-6 pr-10 sm:pr-6">
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                  className="pl-4 lg:pl-6 pr-8 sm:pr-6 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="flex h-full flex-col overflow-hidden border-border/60 bg-card hover:shadow-lg transition-shadow">
                  <div className="relative w-full aspect-square overflow-hidden bg-muted">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 33vw"
                    />
                  </div>

                  <CardContent className="flex flex-1 flex-col p-4 sm:p-6">
                    <div className="flex-1">
                      <h3 className="font-semibold text-base sm:text-lg md:text-xl tracking-tight text-foreground">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-sm sm:text-base text-muted-foreground line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between text-sm sm:text-base">
                      <span className="font-semibold text-foreground">{product.price}</span>
                      <Button
                        type="button"
                        size="sm"
                        className="px-4"
                        aria-label={`View details for ${product.name}`}
                      >
                        View details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-10" />
            <CarouselNext className="hidden sm:flex -right-10" />
          </Carousel>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background via-background/60 to-transparent sm:hidden" />
        </div>
      </div>
    </section>
  )
}


