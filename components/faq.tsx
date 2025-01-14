'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "O CURSO É 100% ONLINE?",
      answer: "Sim, todo o conteúdo é online. Isso proporciona liberdade para estudar em qualquer momento e local, de acordo com a sua disponibilidade de tempo. Você pode acessar os materiais de estudo através do computador, tablet, smart TV ou smartphone."
    },
    {
      question: "COMO FUNCIONA A GARANTIA?",
      answer: "Durante o período de garantia de 7 dias, seu dinheiro fica retido. Se não estiver satisfeito com o curso e solicitar o reembolso, faremos a devolução imediata e sem burocracia."
    },
    {
      question: "SERÁ QUE EU DOU CONTA DO CURSO?",
      answer: "Sim, a Área do Aluno é fácil de usar e o conteúdo foi pensado para facilitar seus estudos. Contamos também com uma equipe de suporte pronta para ajudá-lo com qualquer dúvida de acesso, proporcionando a melhor experiência possível. Você vai amar!"
    },
    {
      question: "POSSO PAGAR PARCELADO NO BOLETO?",
      answer: "Não oferecemos esse tipo de parcelamento, mas entre em contato conosco por e-mail, ou WhatsApp. Vamos encontrar uma opção para facilitar sua inscrição ainda hoje."
    }
  ]

  return (
    <section className="bg-[#2A2A2A] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
          Perguntas Frequentes
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#E5B17A]/20"
              >
                <AccordionTrigger className="text-white hover:text-[#E5B17A] text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

