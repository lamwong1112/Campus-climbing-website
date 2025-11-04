"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { MenuIcon } from "lucide-react"

export function SiteNavbar() {
  const [isHidden, setIsHidden] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const lastScrollRef = useRef(0)

  useEffect(() => {
    setIsMounted(true)
  }, [])

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
      <div className="mx-auto max-w-7xl px-4 sm:px-4 md:px-6 lg:px-8 h-16 flex items-center gap-4 sm:gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Campus Climbing Home">
          <Image
            src="https://res.cloudinary.com/dea6bl2fy/image/upload/v1761760156/campus-logo_rpzrak.webp"
            alt="Campus Climbing logo"
            width={160}
            height={40}
            priority
            className="h-8 md:h-9 w-auto"
          />
        </Link>

        {/* Primary Nav - center */}
        <div className="flex-1 hidden lg:flex justify-center">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              {[
                ["The Walls", "/#walls"],
                ["Membership", "/#membership"],
                ["Shop", "/#shop"],
                ["Social", "/#social"],
                ["Blog", "/#blogs"],
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
        <div className="flex items-center gap-2 ml-auto lg:ml-0">
          <ThemeToggle />
          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <Button asChild variant="secondary">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/join">Join up</Link>
            </Button>
          </div>
          {/* Mobile menu */}
          {isMounted && (
            <div className="lg:hidden">
              <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <DialogTrigger asChild>
                  <Button size="icon" variant="ghost" aria-label="Open menu">
                    <MenuIcon className="size-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="p-0 gap-0 w-screen h-[100svh] fixed inset-0 left-0 top-0 translate-x-0 translate-y-0 mx-0 rounded-none border-0 bg-background/95 backdrop-blur max-w-none sm:max-w-none">
                  <DialogTitle className="sr-only">Menu</DialogTitle>
                  <nav className="h-full w-full flex flex-col items-center justify-evenly py-12">
                    <ul className="flex flex-col items-center justify-evenly h-full w-full">
                      {[
                        ["The Walls", "/#walls"],
                        ["Membership", "/#membership"],
                        ["Shop", "/#shop"],
                        ["Social", "/#social"],
                        ["Blog", "/#blogs"],
                      ].map(([label, href]) => {
                        const hash = (href as string).startsWith('/#') ? (href as string).split('#')[1] : null
                        if (hash) {
                          return (
                            <li key={label as string}>
                              <a
                                href={href as string}
                                className="block rounded-md px-4 py-2 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight hover:text-primary"
                                onClick={(e) => {
                                  e.preventDefault()
                                  setIsMenuOpen(false)
                                  setTimeout(() => {
                                    const el = document.getElementById(hash)
                                    if (el) {
                                      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                      try {
                                        window.history.replaceState(null, '', `/#${hash}`)
                                      } catch {}
                                    }
                                  }, 150)
                                }}
                              >
                                {label}
                              </a>
                            </li>
                          )
                        }
                        return (
                          <li key={label as string}>
                            <DialogClose asChild>
                              <Link
                                href={href as string}
                                className="block rounded-md px-4 py-2 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight hover:text-primary"
                              >
                                {label}
                              </Link>
                            </DialogClose>
                          </li>
                        )
                      })}
                    </ul>
                    <div className="mt-6 flex w-full max-w-xs mx-auto gap-3">
                      <DialogClose asChild>
                        <Button asChild variant="secondary" className="flex-1 text-lg py-6">
                          <Link href="/login">Login</Link>
                        </Button>
                      </DialogClose>
                      <DialogClose asChild>
                        <Button asChild className="flex-1 text-lg py-6">
                          <Link href="/join">Join up</Link>
                        </Button>
                      </DialogClose>
                    </div>
                  </nav>
                </DialogContent>
              </Dialog>
            </div>
          )}
          {!isMounted && (
            <div className="lg:hidden">
              <Button size="icon" variant="ghost" aria-label="Open menu" disabled>
                <MenuIcon className="size-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}


