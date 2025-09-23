import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-primary/5">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-br from-primary/10 via-background to-background border-primary/20">
          <CardHeader>
            <CardTitle className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Ready to climb?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-lg max-w-prose">
              Join Campus Climbing today and be part of a supportive community. First-timer or seasoned climber — we’ve got routes for you.
            </p>
          </CardContent>
          <CardFooter className="gap-3">
            <Button size="lg">Join up</Button>
            <Button size="lg" variant="secondary">Login</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}


