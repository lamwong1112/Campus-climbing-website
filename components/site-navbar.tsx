import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteNavbar() {
  return (
    <header className="w-full sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="inline-block size-7 rounded bg-primary" />
          <span className="font-semibold tracking-tight">Campus Climbing</span>
        </Link>

        {/* Primary Nav - center */}
        <div className="flex-1 flex justify-center">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              {[
                ["About", "/#about"],
                ["Membership", "/#membership"],
                ["Classes", "/#classes"],
                ["Shop", "/#shop"],
                ["Contact", "/#contact"],
              ].map(([label, href]) => (
                <NavigationMenuItem key={label}>
                  <NavigationMenuLink href={href as string} className="px-3 py-2">
                    {label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTAs - right */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="secondary">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/join">Join up</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}


