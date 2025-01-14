'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star } from 'lucide-react'
import Image from 'next/image'

const testimonials = {
  br: [
    {
      name: "Ana Silva",
      text: "Este ebook transformou minha vida! As técnicas são simples mas muito eficazes.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Pedro Santos",
      text: "Incrível como as técnicas funcionam rapidamente. Já notei diferença em poucos dias.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Mariana Costa",
      text: "Finalmente encontrei algo que realmente funciona para ansiedade.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Lucas Oliveira",
      text: "O desafio de 7 dias mudou completamente minha perspectiva.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Beatriz Lima",
      text: "Recomendo fortemente para quem busca libertação da ansiedade.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Gabriel Mendes",
      text: "Material excepcional, muito bem estruturado e prático.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Isabela Rocha",
      text: "As técnicas são fáceis de aplicar no dia a dia.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Thiago Alves",
      text: "Superou todas as minhas expectativas. Valeu cada centavo!",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Fernanda Santos",
      text: "Excelente investimento para quem busca qualidade de vida.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Rafael Costa",
      text: "Mudou completamente minha relação com a ansiedade.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    }
  ],
  us: [
    {
      name: "Sarah Johnson",
      text: "This ebook completely changed my approach to dealing with anxiety.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Michael Smith",
      text: "The 7-day challenge was a game-changer for me.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Emily Davis",
      text: "Finally found something that actually works!",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "David Wilson",
      text: "The techniques are simple yet incredibly effective.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Jessica Brown",
      text: "Best investment I've made for my mental health.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Robert Taylor",
      text: "Highly recommend this to anyone struggling with anxiety.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Amanda White",
      text: "Life-changing content that actually delivers results.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "John Anderson",
      text: "The practical exercises made all the difference.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Lisa Martinez",
      text: "Exceeded my expectations in every way possible.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Kevin Thompson",
      text: "A must-have resource for anxiety management.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    }
  ],
  ca: [
    {
      name: "Emma Thompson",
      text: "This resource has been invaluable in my journey to overcome anxiety.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "William Chen",
      text: "The techniques provided are both practical and effective.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Sophie Tremblay",
      text: "Incredibly helpful resource that delivers real results.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Lucas Roy",
      text: "The daily exercises made a huge difference in my life.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Olivia Baker",
      text: "Best investment I've made for my mental well-being.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "James Wilson",
      text: "The 7-day challenge transformed my perspective on anxiety.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Isabella Martin",
      text: "Finally found something that actually works long-term.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Thomas Anderson",
      text: "Comprehensive and practical approach to anxiety management.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Marie Dubois",
      text: "The results were noticeable within the first week.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Alexander Scott",
      text: "Worth every penny - truly life-changing content.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
    }
  ]
}

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState('br')

  return (
    <section className="bg-[#2A2A2A] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
          O que dizem nossos leitores ao redor do mundo
        </h2>
        
        <Tabs defaultValue="br" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="br" className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brazil-flag-HJVCOK8yMQO6U7zAUhbtoIrtpNX4aj.png"
                alt="Brasil"
                width={24}
                height={24}
                className="rounded-full"
              />
              Brasil
            </TabsTrigger>
            <TabsTrigger value="us" className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usa-T9tjekB09dH6hwzkgmlueyIHOBDsK5.png"
                alt="EUA"
                width={24}
                height={24}
                className="rounded-full"
              />
              EUA
            </TabsTrigger>
            <TabsTrigger value="ca" className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/canada-1OVfKtVATSlpRxYy1AsDtAdabkvCEV.png"
                alt="Canadá"
                width={24}
                height={24}
                className="rounded-full"
              />
              Canadá
            </TabsTrigger>
          </TabsList>

          <TabsContent value="br">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.br.map((testimonial, index) => (
                <TestimonialCard 
                  key={index} 
                  {...testimonial} 
                  flag="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brazil-flag-HJVCOK8yMQO6U7zAUhbtoIrtpNX4aj.png"
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="us">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.us.map((testimonial, index) => (
                <TestimonialCard 
                  key={index} 
                  {...testimonial} 
                  flag="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usa-T9tjekB09dH6hwzkgmlueyIHOBDsK5.png"
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ca">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.ca.map((testimonial, index) => (
                <TestimonialCard 
                  key={index} 
                  {...testimonial} 
                  flag="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/canada-1OVfKtVATSlpRxYy1AsDtAdabkvCEV.png"
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  name: string
  text: string
  rating: number
  image: string
  flag: string
}

function TestimonialCard({ name, text, rating, image, flag }: TestimonialCardProps) {
  return (
    <Card className="bg-[#1F1F1F] border-none">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <Image
              src={flag || "/placeholder.svg"}
              alt="Country flag"
              width={20}
              height={20}
              className="absolute -bottom-1 -right-1 rounded-full border-2 border-[#1F1F1F]"
            />
          </div>
          <div>
            <p className="text-[#E5B17A] font-semibold">{name}</p>
            <div className="flex gap-1">
              {Array.from({ length: rating }).map((_, i) => (
                <Star key={i} className="fill-[#E5B17A] text-[#E5B17A] h-4 w-4" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-white">{text}</p>
      </CardContent>
    </Card>
  )
}

