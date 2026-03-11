import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Platform } from "@/components/platform";
import { Team } from "@/components/team";
import { Values } from "@/components/values";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Platform />
        <Team />
        <Values />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
