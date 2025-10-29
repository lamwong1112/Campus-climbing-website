import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function CTASection() {
  return (
    <section id="cta" className="relative block h-[100svh] w-full flex items-center snap-start snap-stop-always">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-xl border bg-card text-card-foreground p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top,theme(colors.primary/40),transparent_60%)]" />
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Ready to climb with us?
              </h2>
              <p className="text-muted-foreground mt-2">
                Join Campus Climbing today and get access to classes, community events, and member perks.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-2">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/join">Join up</Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                  <Link href="/#membership">View membership</Link>
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-6" />
          <p className="text-xs text-muted-foreground">
            Questions? <Link href="/#contact" className="underline underline-offset-4">Contact us</Link> — we are happy to help.
          </p>
        </div>
      </div>
    </section>
  );
}



