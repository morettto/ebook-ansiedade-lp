export default function BonusSection() {
  return (
    <section className="bg-[#1F1F1F] py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Preparamos um presentão para quem comprar agora!
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-white">
            Adicionamos um
            <span className="text-[#E5B17A] font-bold"> DESAFIO DE 7 DIAS </span>
            para você por em prática tudo o que aprender no ebook e vencer a ansiedade de uma vez por todas!
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-50"></div>
    </section>
  )
}

