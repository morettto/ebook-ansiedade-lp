import { Check, X } from 'lucide-react'
import Link from 'next/link'

export default function Features() {
  const checkout_link = "https://pay.kiwify.com.br/mhI3rfY"
  const included = [
    {
      title: "Conteúdo rico e detalhado."
    },
    {
      title: "173 páginas cheias de conhecimento prático e aplicável.",
    },
    {
      title: "9 capítulos organizados para guiar você passo a passo.",
    },
    {
      title: "Método natural comprovado.",
    }
  ]

  const notIncluded = [
    "Fórmulas mágicas. A verdadeira mudança depende do seu esforço e dedicação.",
    "Sugestões de medicamentos. Este é um guia 100% natural.",
    "Acompanhamento profissional. O poder está em você e no conteúdo oferecido."
  ]

  return (
    <section className="bg-[#1F1F1F] py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">
              O Ebook <span className="text-[#E5B17A]">oferece</span>
            </h2>
            <div className="space-y-8">
              {included.map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 bg-[#2A2A2A] p-2 rounded-full">
                    <Check className="text-[#E5B17A] h-6 w-6" />
                  </div>
                  <div className="space-y-4">
                    <p className="text-white text-lg">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">
              O Ebook <span className="text-red-500">não oferece</span>
            </h2>
            <div className="space-y-6">
              {notIncluded.map((item, index) => (
                <div key={index} className="flex gap-6 items-center">
                  <div className="flex-shrink-0 bg-[#2A2A2A] p-2 rounded-full">
                    <X className="text-red-500 h-6 w-6" />
                  </div>
                  <p className="text-white text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center col-span-full">
              <Link href={checkout_link} legacyBehavior>
                <a href={checkout_link} className="block">
                  <button 
                    className="bg-[#E5B17A] hover:bg-[#d4a06c] text-white text-lg px-6 py-3 rounded-full"
                  >
                    GARANTIR OFERTA
                  </button>
                </a>
              </Link>
            </div>
        </div>
      </div>
    </section>
  )
}