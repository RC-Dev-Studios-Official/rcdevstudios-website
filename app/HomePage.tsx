import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Products } from "./components/Products";
import { About } from "./components/About";
import { Technologies } from "./components/Technologies";
import { Process } from "./components/Process";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <Hero />
        <Services />
        <Products />
        <About />
        <Technologies />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
