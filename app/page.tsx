"use client"

import Hero from "../components/hero"
import Features from "../components/features"
import BonusSection from "../components/bonus-section"
import TestimonialsCarousel from "../components/testimonials-carousel"
import StatsBanner from "../components/stats-banner"
import FAQ from "../components/faq"
import ThankYou from "../components/thank-you"

export default function SyntheticV0PageForDeployment() {
  return (
    <>
      <Hero />
      <Features />
      <BonusSection />
      <TestimonialsCarousel />
      <StatsBanner />
      <FAQ />
      <ThankYou />
    </>
  )
}