'use client'

import { useEffect, useRef, useState } from 'react'
import { Star, StarHalf } from 'lucide-react'
import Image from 'next/image'

export default function StatsBanner() {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)
  const TARGET_COUNT = 100000
  const ANIMATION_DURATION = 2000

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1
      }
    )

    if (bannerRef.current) {
      observer.observe(bannerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      let startTime: number | null = null
      let animationFrame: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = timestamp - startTime
        const percentage = Math.min(progress / ANIMATION_DURATION, 1)
        
        setCount(Math.floor(TARGET_COUNT * percentage))

        if (progress < ANIMATION_DURATION) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isVisible])

  return (
    <div 
      ref={bannerRef}
      className="bg-[#E5B17A] py-8 px-4"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center text-center">
          <div className="flex flex-col items-center">
            <div className="flex justify-center gap-4 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/canada-1OVfKtVATSlpRxYy1AsDtAdabkvCEV.png"
                alt="Bandeira do Canadá"
                width={48}
                height={48}
                className="rounded-full"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usa-T9tjekB09dH6hwzkgmlueyIHOBDsK5.png"
                alt="Bandeira dos Estados Unidos"
                width={48}
                height={48}
                className="rounded-full"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brazil-flag-HJVCOK8yMQO6U7zAUhbtoIrtpNX4aj.png"
                alt="Bandeira do Brasil"
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>
            <p className="text-white font-semibold">3 países impactados</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex justify-center gap-4 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/canada-1OVfKtVATSlpRxYy1AsDtAdabkvCEV.png"
                alt="Bandeira do Canadá"
                width={32}
                height={32}
                className="rounded-full"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usa-T9tjekB09dH6hwzkgmlueyIHOBDsK5.png"
                alt="Bandeira dos Estados Unidos"
                width={32}
                height={32}
                className="rounded-full"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brazil-flag-HJVCOK8yMQO6U7zAUhbtoIrtpNX4aj.png"
                alt="Bandeira do Brasil"
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {count.toLocaleString()}+
            </h3>
            <p className="text-white font-semibold">pessoas que acreditaram</p>
          </div>

          <div>
            <div className="flex justify-center items-center gap-1 mb-2">
              <span className="text-4xl md:text-5xl font-bold text-white">4.9</span>
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-white text-white" />
                ))}
                <StarHalf className="h-6 w-6 fill-white text-white" />
              </div>
            </div>
            <p className="text-white font-semibold">média de satisfação</p>
          </div>
        </div>
      </div>
    </div>
  )
}

