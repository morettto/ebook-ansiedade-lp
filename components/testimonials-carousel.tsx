'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: "Ana Silva",
    text: "Este ebook transformou minha vida! As técnicas são simples mas muito eficazes.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    flag: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brazil-flag-HJVCOK8yMQO6U7zAUhbtoIrtpNX4aj.png"
  },
  {
    name: "Samara Andrade",
    text: "Leitura muito benéfica para a alma.",
    rating: 5,
    image: "/resources/comments-pictures/pexels-lia-castro-1708654-12340459.jpg",
    flag: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brazil-flag-HJVCOK8yMQO6U7zAUhbtoIrtpNX4aj.png"
  },
  {
    name: "Michael Smith",
    text: "The 7-day challenge was a game-changer for me. Highly recommended!",
    rating: 4,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    flag: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usa-T9tjekB09dH6hwzkgmlueyIHOBDsK5.png"
  },
  {
    name: "Sophie Tremblay",
    text: "Incredibly helpful resource that delivers real results.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    flag: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/canada-1OVfKtVATSlpRxYy1AsDtAdabkvCEV.png"
  },
  {
    name: "Pedro Santos",
    text: "Incrível como as técnicas funcionam rapidamente.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    flag: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brazil-flag-HJVCOK8yMQO6U7zAUhbtoIrtpNX4aj.png"
  },
  {
    name: "Emily Davis",
    text: "Finally found something that actually works!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    flag: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usa-T9tjekB09dH6hwzkgmlueyIHOBDsK5.png"
  },
  {
    name: "Jean-Luc Dubois",
    text: "Une ressource incroyable pour gérer l'anxiété.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    flag: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/canada-1OVfKtVATSlpRxYy1AsDtAdabkvCEV.png"
  },
  {
    name: "Mariana Costa",
    text: "Excelente material, muito prático e eficiente!",
    rating: 4,
    flag: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brazil-flag-HJVCOK8yMQO6U7zAUhbtoIrtpNX4aj.png"
  },
  {
    name: "John Anderson",
    text: "Best investment I've made for my mental health.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    flag: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usa-T9tjekB09dH6hwzkgmlueyIHOBDsK5.png"
  },
  {
    name: "Joshua Santin",
    text: "Light and pleasant reading",
    rating: 4,
    image: "/resources/comments-pictures/pexels-carlosfotografias-5653331.jpg",
    flag: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usa-T9tjekB09dH6hwzkgmlueyIHOBDsK5.png"
  },
  {
    name: "Clara Oliveira",
    text: "Transformou minha relação com a ansiedade.",
    rating: 5,
    image: "/resources/comments-pictures/pexels-matheushenrin-3376116.jpg",
    flag: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brazil-flag-HJVCOK8yMQO6U7zAUhbtoIrtpNX4aj.png"
  },
  {
    name: "Edward Prince",
    text: "Helped me in a very difficult time",
    rating: 4,
    image: "/resources/comments-pictures/pexels-rogeriosouzafotografia-18339508.jpg",
    flag: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/canada-1OVfKtVATSlpRxYy1AsDtAdabkvCEV.png"
  },
  {
    name: "David Silva",
    text: "Não esperava a ajuda que tive lendo isso",
    rating: 5,
    image: "/resources/comments-pictures/pexels-carlosfotografias-5669788.jpg",
    flag: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brazil-flag-HJVCOK8yMQO6U7zAUhbtoIrtpNX4aj.png"
  }
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonialsPerPage = 3
  const maxIndex = testimonials.length - testimonialsPerPage

  const nextSlide = () => {
    setCurrentIndex(current => 
      current + testimonialsPerPage >= testimonials.length ? 0 : current + testimonialsPerPage
    )
  }

  const prevSlide = () => {
    setCurrentIndex(current => 
      current - testimonialsPerPage < 0 ? maxIndex : current - testimonialsPerPage
    )
  }

  return (
    <section className="bg-[#2A2A2A] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
          O que dizem nossos leitores ao redor do mundo
        </h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / testimonialsPerPage)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full md:w-1/3 flex-shrink-0 px-4"
                >
                  <Card className="bg-[#1F1F1F] border-none h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative">
                          {testimonial.image ? (
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={48}
                              height={48}
                              className="rounded-full"
                            />
                          ) : (
                            <div className="w-12 h-12 bg-[#2A2A2A] rounded-full flex items-center justify-center">
                              <span className="text-[#E5B17A] text-xl font-bold">
                                {testimonial.name[0]}
                              </span>
                            </div>
                          )}
                          <Image
                            src={testimonial.flag || "/placeholder.svg"}
                            alt="Country flag"
                            width={20}
                            height={20}
                            className="absolute -bottom-1 -right-1 rounded-full border-2 border-[#1F1F1F]"
                          />
                        </div>
                        <div>
                          <p className="text-[#E5B17A] font-semibold">{testimonial.name}</p>
                          <div className="flex gap-1">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <Star key={i} className="fill-[#E5B17A] text-[#E5B17A] h-4 w-4" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-white">{testimonial.text}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute -left-4 top-1/2 -translate-y-1/2 text-white hover:bg-[#E5B17A]/20"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute -right-4 top-1/2 -translate-y-1/2 text-white hover:bg-[#E5B17A]/20"
            onClick={nextSlide}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      </div>
    </section>
  )
}

