import { HeroSection } from "@/components/ui/hero-section"
import { WavePath } from "@/components/ui/wave-path"
import CombinedFeaturedSection from "@/components/ui/combined-featured-section"
import ContentSection from "@/components/ui/content-default"
import Casestudies from "@/components/ui/case-studies"
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects"
import { Feature197 } from "@/components/ui/accordion-feature-section"
import { Testimonial } from "@/components/ui/design-testimonial"
import { Footerdemo } from "@/components/ui/footer-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />

      <div className="relative w-full flex justify-center -mt-20 z-10 pointer-events-none">
        <WavePath className="text-foreground/10" />
      </div>

      <ContentSection />

      <FeaturesSectionWithHoverEffects />

      <CombinedFeaturedSection />

      <Casestudies />

      <Testimonial />

      <Feature197 />

      <Footerdemo />
    </div>
  )
}
