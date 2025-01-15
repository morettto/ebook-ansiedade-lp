import { Button } from "@/components/ui/button"
import CountdownTimer from "./countdown-timer"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const checkout_link = "https://pay.kiwify.com.br/mhI3rfY"
  return (
    <section className="bg-[#2A2A2A] min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-white text-5xl lg:text-6xl font-bold leading-tight">
              Diga <span className="text-[#E5B17A]">"Adeus"</span> ao seu cativeiro interior!
            </h1>
            <p className="text-[#E5B17A] text-xl lg:text-2xl">
              O ebook anti-ansiedade que ajudou <strong>milhares de americanos</strong>, agora em <strong>português!</strong>
            </p>
            <div className="space-y-6">
              <CountdownTimer />
              <Link href={checkout_link} legacyBehavior>
                <a href={checkout_link} className="block w-full">
                  <Button 
                    className="bg-[#E5B17A] hover:bg-[#d4a06c] text-white text-lg px-8 py-6 rounded-full w-full"
                  >
                    EU QUERO!
                  </Button>
                </a>
              </Link>
            </div>
          </div>
          <div className="relative">
            {/* Background powder explosion */}
            <div className="absolute inset-0 -m-10 z-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/traced-vecteezy_ai-generated-explosion-of-colored-powder-isolated-on-black_35823592%20(1)-RTTdr4E3EdU6McW1qIg5W1uHn7mTv6.png"
                alt="Colorful background effect"
                width={800}
                height={600}
                className="w-full h-full object-cover opacity-70"
              />
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 blur-2xl z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-transparent to-orange-500/30" />
            </div>
            
            {/* Main mockup */}
            <div className="relative z-20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Adeus,%20Ansiedade!%20Mockup%203-9m9FqVcxHYlA1eXhQI7fuzERZu1IHx.png"
                alt="Ebook Adeus Ansiedade em múltiplos formatos"
                width={1400}
                height={1000}
                className="w-full h-auto"
                priority
              />
            </div>
            
            {/* Bonus badge */}
            <div 
              className="absolute bottom-4 left-4 z-30 transition-transform duration-300 ease-in-out transform rotate-45 hover:rotate-0"
            >
              <div className="bg-[#E5B17A] text-white p-6 rounded-full relative">
                <div className="text-center">
                  <div className="font-bold text-xl">BÔNUS</div>
                  <div className="font-serif italic">DESAFIO</div>
                  <div className="font-serif italic">7 DIAS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}