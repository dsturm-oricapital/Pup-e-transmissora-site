export function Contact() {
  return (
    <section
      id="contato"
      className="px-16 py-24 text-center border-t border-[#333] max-md:px-8 max-md:py-16"
    >
      <div className="max-w-[600px] mx-auto">
        <h2 className="font-serif text-4xl font-normal text-white mb-8 tracking-tight">
          Contato
        </h2>
        <div className="text-base text-[#888] leading-8">
          <p>
            <a
              href="mailto:xptoenergia@xptoenergia.com.br"
              className="text-white no-underline transition-colors font-medium hover:text-[#888]"
            >
              xptoenergia@xptoenergia.com.br
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
