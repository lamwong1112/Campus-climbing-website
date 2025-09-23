import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dumbbell, Hand, MapPin, Ticket } from "lucide-react"

const features = [
  {
    title: "Routes for every level",
    description: "From first-timers to pros. Fresh sets weekly.",
    icon: Hand,
  },
  {
    title: "Coaching & classes",
    description: "Technique, strength, mobility — train smart.",
    icon: Dumbbell,
  },
  {
    title: "Membership perks",
    description: "Guest passes, discounts, and early access.",
    icon: Ticket,
  },
  {
    title: "Jordan, Kowloon",
    description: "2 mins from MTR. Night climbs welcome.",
    icon: MapPin,
  },
]

export function FeaturesSection() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Why climb at Campus</h2>
          <p className="text-muted-foreground mt-2">Community-first bouldering with thoughtful routes and coaching.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <Card key={f.title}>
              <CardHeader>
                <f.icon className="size-6 text-muted-foreground" />
                <CardTitle>{f.title}</CardTitle>
                <CardDescription>{f.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


