export function Platform() {
  return (
    <section
      id="sobre"
      className="bg-[--color-light-bg] px-16 py-24 text-center border-t border-b border-[--color-border] max-md:px-8 max-md:py-16"
    >
      <div className="max-w-[900px] mx-auto">
        <h2 className="font-serif text-4xl font-normal text-[--color-primary] mb-10 tracking-tight">
          Plataforma de longo prazo
        </h2>
        <div className="flex justify-center gap-8 flex-wrap mt-8 max-md:flex-col max-md:gap-4">
          <div className="px-10 py-4 bg-white border border-[--color-border] text-base text-[--color-foreground] font-medium tracking-wide transition-all hover:border-[--color-primary] hover:shadow-md hover:-translate-y-0.5 animate-fade-in animate-delay-200 max-md:w-full">
            Alinhamento de capital
          </div>
          <div className="px-10 py-4 bg-white border border-[--color-border] text-base text-[--color-foreground] font-medium tracking-wide transition-all hover:border-[--color-primary] hover:shadow-md hover:-translate-y-0.5 animate-fade-in animate-delay-400 max-md:w-full">
            Execução rigorosa
          </div>
        </div>
      </div>
    </section>
  );
}
