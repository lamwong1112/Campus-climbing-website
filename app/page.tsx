import { SiteNavbar } from "@/components/site-navbar";
import { Hero } from "@/components/hero";
import { FeaturesSection } from "@/components/sections/features";
import { MembershipSection } from "@/components/sections/membership";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { TestimonialsMarqueeSection } from "@/components/sections/testimonials-marquee";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteNavbar />
      <main className="font-sans">
        <Hero />
        <TestimonialsMarqueeSection />
        <FeaturesSection />
        <MembershipSection />
        <TestimonialsSection />
      </main>
      <SiteFooter />
    </>
  );
}
