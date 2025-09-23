import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-block size-6 rounded bg-primary" />
            <span className="font-semibold tracking-tight">Campus Climbing</span>
          </Link>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/#about">About</Link>
            <Link href="/#membership">Membership</Link>
            <Link href="/#classes">Classes</Link>
            <Link href="/#shop">Shop</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </div>
        <Separator className="my-6" />
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Campus Climbing. All rights reserved.</div>
      </div>
    </footer>
  )
}


