import Hero from "./components/hero"
import Features from "./components/features"
import TestimonialsCarousel from "./components/testimonials-carousel"
import BonusSection from "./components/bonus-section"
import FAQ from "./components/faq"

export default function Page() {
  return (
    <main className="min-h-screen bg-[#2A2A2A]">
      <Hero />
      <Features />
      <TestimonialsCarousel />
      <BonusSection />
      <FAQ />
    </main>
  )
}

