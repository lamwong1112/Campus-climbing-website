"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type PassCategory = "day" | "monthly" | "season" | "first-timer" | "share"

const membershipData = {
  day: [
    { name: "Early Bird", price: "$120" },
    { name: "Student", price: "$150" },
    { name: "Adult", price: "$180" },
  ],
  monthly: [
    { name: "Student", price: "$500" },
    { name: "Adult", price: "$660" },
  ],
  season: [
    { name: "3 Month", price: "$1,800" },
    { name: "6 Month", price: "$3,480" },
    { name: "12 Month", price: "$6,720" },
  ],
  "first-timer": [
    { name: "Day Pass + Shoes Rental", price: "$150" },
    { name: "5 Day Pass + Shoes Rental", price: "$600" },
  ],
  share: [
    { name: "10 Share Pass", price: "$1,700" },
    { name: "20 Share Pass", price: "$3,200" },
    { name: "30 Share Pass", price: "$4,500" },
    { name: "50 Share Pass", price: "$7,000" },
  ],
}

const categoryLabels: Record<PassCategory, string> = {
  day: "Day Pass",
  monthly: "Monthly Pass",
  season: "Season Pass",
  "first-timer": "First Timer",
  share: "Share Pass",
}

export function MembershipSection() {
  const [activeCategory, setActiveCategory] = useState<PassCategory>("day")

  return (
    <section id="membership" className="relative block min-h-[100svh] w-full bg-background flex items-start snap-start snap-stop-always overflow-y-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-4 md:px-6 lg:px-8 w-full py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6 sm:mb-8">Membership</h2>
          
          {/* Category Buttons */}
          <div className="flex flex-wrap gap-2 mb-6">
            {(Object.keys(categoryLabels) as PassCategory[]).map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="text-xs sm:text-sm flex-1 sm:flex-none min-w-[120px] sm:min-w-0"
              >
                {categoryLabels[category]}
              </Button>
            ))}
          </div>

          {/* Pass Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {membershipData[activeCategory].map((pass, index) => (
              <Card key={`${activeCategory}-${index}`} className="h-[120px] sm:h-[140px] overflow-hidden">
                <CardContent className="h-full flex items-center justify-between px-4 sm:px-6 gap-2 sm:gap-4">
                  <h3 className="font-semibold text-sm sm:text-base md:text-lg min-w-0 break-words pr-2">{pass.name}</h3>
                  <div className="flex-1 border-t border-dashed border-muted-foreground/30 mx-2 sm:mx-4 min-w-[20px]"></div>
                  <p className="text-xs sm:text-sm text-muted-foreground flex-shrink-0 whitespace-nowrap">{pass.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


