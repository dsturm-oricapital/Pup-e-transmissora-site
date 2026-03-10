export function Contact() {
  return (
    <section
      id="contato"
      className="px-16 py-24 text-center bg-[--color-light-bg] border-t border-[--color-border] max-md:px-8 max-md:py-16"
    >
      <div className="max-w-[600px] mx-auto">
        <h2 className="font-serif text-4xl font-normal text-[--color-primary] mb-8 tracking-tight">
          Contato
        </h2>
        <div className="text-base text-[--color-muted] leading-8">
          <p>
            <a
              href="mailto:xptoenergia@xptoenergia.com.br"
              className="text-[--color-primary] no-underline transition-colors font-medium hover:text-[--color-muted]"
            >
              xptoenergia@xptoenergia.com.br
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
