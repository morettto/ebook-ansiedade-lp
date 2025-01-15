import { Button } from "@/components/ui/button"
import CountdownTimer from "./countdown-timer"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-[#2A2A2A] min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-white text-5xl lg:text-6xl font-bold leading-tight">
              Diga <span className="text-[#E5B17A]">"Adeus"</span> ao seu cativeiro interior!
            </h1>
            <p className="text-[#E5B17A] text-xl lg:text-2xl">
              O ebook anti-ansiedade que ajudou <strong>milhares de americanos</strong>, agora em <strong>português!!!!</strong>.
            </p>
            <div className="space-y-6">
              <CountdownTimer />
              <Button 
                className="bg-[#E5B17A] hover:bg-[#d4a06c] text-white text-lg px-8 py-6 rounded-full w-full"
              >
                EU QUERO!
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Adeus,%20Ansiedade!%20Mockup%203-9m9FqVcxHYlA1eXhQI7fuzERZu1IHx.png"
              alt="Ebook Adeus Ansiedade em múltiplos formatos"
              width={1400}
              height={1000}
              className="w-full h-auto"
              priority
            />
            <div 
              className="absolute -bottom-10 -right-10 z-10 transition-transform duration-300 hover:rotate-0"
              style={{ transform: 'rotate(90deg)' }}
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

