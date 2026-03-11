const values = [
  {
    title: "Disciplina",
    description:
      "Rigor na análise, execução e alocação de capital com foco em retornos sustentáveis de longo prazo e em controle de risco de perda.",
  },
  {
    title: "Alinhamento/Partnership",
    description:
      "Acreditamos em dividir para multiplicar e em skin in the game como forma de alinhamento e de incentivo a alta performance humana e empresarial.",
  },
  {
    title: "1 + 1 = 3",
    description:
      "A força do time vem da sintonia, da comunicação e da confiança, não da competição entre si.",
  },
  {
    title: "Lucro, Resultados, Retorno",
    description:
      "Lucro, resultado e retorno são pilares centrais da nossa engrenagem, que gera perpetuação, oportunidade e sustentabilidade para todos.",
  },
  {
    title: "Visão de Longo Prazo",
    description:
      "Decisões baseadas em perpetuação e geração de valor no longo prazo, mesmo que sacrificando otimizações de curto prazo.",
  },
];

export function Values() {
  return (
    <section id="valores" className="bg-[#2a2a2a] px-16 py-24 max-md:px-8 max-md:py-16">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="font-serif text-5xl font-light mb-12 tracking-tight text-white">
          Valores
        </h2>
        <div className="flex flex-col gap-10">
          {values.map((value) => (
            <div
              key={value.title}
              className="flex items-baseline gap-8 border-l-2 border-white/30 pl-8 transition-all hover:border-white/60 max-md:flex-col max-md:gap-2"
            >
              <div className="font-serif text-2xl font-normal min-w-[200px] text-white max-md:min-w-0">
                {value.title}
              </div>
              <div className="text-base leading-relaxed text-[#888] font-light">
                {value.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
