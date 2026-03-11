export function Platform() {
  return (
    <section
      id="sobre"
      className="bg-[#2a2a2a] px-16 py-24 text-center border-t border-b border-[#333] max-md:px-8 max-md:py-16"
    >
      <div className="max-w-[900px] mx-auto">
        <h2 className="font-serif text-4xl font-normal text-white mb-10 tracking-tight">
          Plataforma de longo prazo
        </h2>
        <div className="flex justify-center gap-8 flex-wrap mt-8 max-md:flex-col max-md:gap-4">
          <div className="px-10 py-4 bg-transparent border border-[#505050] text-base text-white font-medium tracking-wide transition-all hover:border-white hover:bg-[#333] max-md:w-full">
            Alinhamento de capital
          </div>
          <div className="px-10 py-4 bg-transparent border border-[#505050] text-base text-white font-medium tracking-wide transition-all hover:border-white hover:bg-[#333] max-md:w-full">
            Execução rigorosa
          </div>
        </div>
      </div>
    </section>
  );
}
