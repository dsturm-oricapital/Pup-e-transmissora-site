"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/[0.98] backdrop-blur-sm border-b border-border z-50 animate-slide-down">
      <nav className="max-w-[1400px] mx-auto px-16 py-4 flex justify-between items-center max-md:px-8 max-md:flex-col max-md:gap-6">
        <div className="flex items-center">
          <span className="font-serif text-2xl font-medium tracking-tight text-primary">
            PuP-E Transmissora
          </span>
        </div>
        <ul className="flex gap-12 list-none max-md:gap-6 max-md:flex-col max-md:text-center">
          <li>
            <Link
              href="#sobre"
              className="text-foreground no-underline text-sm font-medium tracking-wide transition-colors hover:text-muted relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href="#time"
              className="text-foreground no-underline text-sm font-medium tracking-wide transition-colors hover:text-muted relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              Time
            </Link>
          </li>
          <li>
            <Link
              href="#valores"
              className="text-foreground no-underline text-sm font-medium tracking-wide transition-colors hover:text-muted relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              Valores
            </Link>
          </li>
          <li>
            <Link
              href="#contato"
              className="text-foreground no-underline text-sm font-medium tracking-wide transition-colors hover:text-muted relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
