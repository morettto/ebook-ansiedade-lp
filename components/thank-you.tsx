import { Button } from "@/components/ui/button"
import { Heart } from 'lucide-react'
import Link from "next/link"

export default function ThankYou() {
  const checkout_link = "https://pay.kiwify.com.br/mhI3rfY"
  return (
    <section className="bg-[#1F1F1F] py-20">
      <div className="container mx-auto px-4 text-center">
        <Heart className="text-[#E5B17A] h-12 w-12 mx-auto mb-6" />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Obrigado por chegar até aqui!
        </h2>
        <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
          Estamos ansiosos para fazer parte da sua jornada de transformação.
          Comece agora mesmo sua caminhada para uma vida com menos ansiedade.
        </p>
        <Link href={checkout_link} legacyBehavior>
          <a href={checkout_link} className="block">
            <button
              className="bg-[#E5B17A] hover:bg-[#d4a06c] text-white text-lg px-6 py-3 rounded-full"
            >
              COMEÇAR AGORA
            </button>
          </a>
        </Link>
      </div>
    </section>
  )
}

