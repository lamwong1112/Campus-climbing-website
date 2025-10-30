import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="relative block h-[100svh] w-full border-t snap-start snap-stop-always">
      <div className="mx-auto max-w-7xl px-4 sm:px-4 md:px-6 lg:px-8 w-full h-full flex flex-col justify-end gap-4 py-10">
        <div className="rounded-xl border bg-card/80 backdrop-blur-sm text-card-foreground p-8 sm:p-12 relative overflow-hidden min-h-[320px] flex-1 flex flex-col justify-center">
          <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top,theme(colors.primary/40),transparent_60%)]" />
            <div className="max-w-3xl md:max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            <p className="text-base sm:text-lg md:text-xl font-semibold tracking-[0.12em] uppercase text-muted-foreground">Ready to climb with us?</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              See you at the top!
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



