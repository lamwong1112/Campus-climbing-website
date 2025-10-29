"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { MenuIcon } from "lucide-react"

export function SiteNavbar() {
  const [isHidden, setIsHidden] = useState(false)
  const lastScrollRef = useRef(0)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      const current = window.scrollY || window.pageYOffset
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const last = lastScrollRef.current
          const delta = current - last
          const threshold = 8
          if (Math.abs(delta) > threshold) {
            if (delta > 0 && current > 80) {
              setIsHidden(true)
            } else {
              setIsHidden(false)
            }
            lastScrollRef.current = current
          }
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`w-full sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300 ${isHidden ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4 sm:gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="inline-block size-7 rounded bg-primary" />
          <span className="font-semibold tracking-tight">Campus Climbing</span>
        </Link>

        {/* Primary Nav - center */}
        <div className="flex-1 hidden md:flex justify-center">
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
        <div className="flex items-center gap-2 ml-auto md:ml-0">
          <ThemeToggle />
          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <Button asChild variant="secondary">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/join">Join up</Link>
            </Button>
          </div>
          {/* Mobile menu */}
          <div className="md:hidden">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="icon" variant="ghost" aria-label="Open menu">
                  <MenuIcon className="size-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="p-0 gap-0 w-full max-w-none top-[64px] md:top-16 left-0 right-0 translate-x-0 translate-y-0 mx-0 rounded-none border-x-0">
                <DialogTitle className="sr-only">Menu</DialogTitle>
                <nav className="p-4">
                  <ul className="flex flex-col gap-1">
                    {[
                      ["About", "/#about"],
                      ["Membership", "/#membership"],
                      ["Classes", "/#classes"],
                      ["Shop", "/#shop"],
                      ["Contact", "/#contact"],
                    ].map(([label, href]) => (
                      <li key={label as string}>
                        <Link
                          href={href as string}
                          className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex gap-2">
                    <Button asChild variant="secondary" className="flex-1">
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild className="flex-1">
                      <Link href="/join">Join up</Link>
                    </Button>
                  </div>
                </nav>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  )
}


