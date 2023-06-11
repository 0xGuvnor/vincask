import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Testimonials />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
}
