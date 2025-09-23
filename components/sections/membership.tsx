import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const tiers = [
  {
    name: "Day Pass",
    price: "$20",
    description: "One day of unlimited bouldering.",
    features: ["All-day access", "Gear rental available"],
    cta: "Get a pass",
  },
  {
    name: "Monthly",
    price: "$89",
    description: "Unlimited climbs, best for regulars.",
    features: ["Unlimited access", "Guest pass monthly", "Member events"],
    cta: "Join monthly",
    highlight: true,
  },
  {
    name: "Annual",
    price: "$899",
    description: "Commit and save — 2 months free.",
    features: ["Unlimited access", "Priority booking", "Exclusive perks"],
    cta: "Join annual",
  },
]

export function MembershipSection() {
  return (
    <section id="membership" className="py-20 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Membership</h2>
          <p className="text-muted-foreground mt-2">Flexible options for every climber.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <Card key={t.name} className={t.highlight ? "border-primary/60 shadow-md" : undefined}>
              <CardHeader>
                <CardTitle className="text-xl">{t.name}</CardTitle>
                <CardDescription>{t.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-semibold">{t.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {t.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">{t.cta}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


