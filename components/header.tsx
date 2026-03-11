"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-[#1f1f1f]/95 backdrop-blur-sm border-b border-[#333] z-50 animate-slide-down">
      <nav className="max-w-[1400px] mx-auto px-16 py-5 flex justify-end items-center max-md:px-8 max-md:justify-center">
        <ul className="flex gap-12 list-none max-md:gap-6">
          <li>
            <Link
              href="#sobre"
              className="text-white/80 no-underline text-sm font-medium tracking-wide transition-colors hover:text-white"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href="#time"
              className="text-white/80 no-underline text-sm font-medium tracking-wide transition-colors hover:text-white"
            >
              Time
            </Link>
          </li>
          <li>
            <Link
              href="#valores"
              className="text-white/80 no-underline text-sm font-medium tracking-wide transition-colors hover:text-white"
            >
              Valores
            </Link>
          </li>
          <li>
            <Link
              href="#contato"
              className="text-white/80 no-underline text-sm font-medium tracking-wide transition-colors hover:text-white"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
