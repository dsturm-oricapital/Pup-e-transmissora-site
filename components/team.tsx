const teamMembers = [
  {
    role: "Presidente do Conselho",
    name: "Carlos Alberto Trindade Neto, CFA",
    bio: "Sócio fundador da Ori Capital, onde atua como gestor dos fundos de ação. Anteriormente, foi membro do Conselho de Administração da TAESA, gestor da FIP Coliseu (responsável pela compra da Terna e criação da TAESA) e sócio do Banco Modal.",
  },
  {
    role: "CEO",
    name: "Paulo Ferreira",
    bio: "Executivo com 20 anos de experiência no setor elétrico, sendo 16 anos dedicados à transmissão de energia. Atuou como CFO da Argo Energia, transmissora criada pelo Pátria em 2016. Nos últimos anos, concluiu com sucesso 8 transações de M&A e participou de mais de R$ 8 bilhões em operações de dívida e equity. Anteriormente, ocupou posições executivas na TAESA, Renova Energia, Sterlite e Shell.",
  },
];

export function Team() {
  return (
    <section id="time" className="px-16 py-24 max-w-[1400px] mx-auto max-md:px-8 max-md:py-16">
      <h2 className="font-serif text-5xl font-light text-white mb-16 text-center tracking-tight">
        Time
      </h2>
      <div className="grid grid-cols-2 gap-16 gap-x-12 max-md:grid-cols-1">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="border-t-2 border-white pt-8 transition-transform hover:translate-x-2"
          >
            <div className="text-xs uppercase tracking-[0.15em] text-[#888] mb-3 font-semibold">
              {member.role}
            </div>
            <h3 className="font-serif text-2xl font-medium text-white mb-4">
              {member.name}
            </h3>
            <p className="text-base leading-relaxed text-[#888] font-light">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
