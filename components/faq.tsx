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
      question: "COMO FUNCIONA A GARANTIA DE 7 DIAS?",
      answer: "Durante o período de garantia, seu dinheiro fica retido. Se não estiver satisfeito com o eBook e solicitar reembolso, faremos a devolução imediata, sem burocracia."
    },
    {
      question: "A LEITURA É DIFÍCIL?",
      answer: "Todo o conteúdo do eBook foi pensado e planejado para ser acessível a qualquer leitor."
    },
    {
      question: "COMO EU RECEBO O EBOOK?",
      answer: "O conteúdo é 100% digital, e você receberá um link de acesso por e-mail, que será liberado minutos após a confirmação do seu pagamento."
    },
    {
      question: "POR QUANTO TEMPO É VÁLIDO MEU LINK DE ACESSO?",
      answer: "Válido por 12 meses."
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

