import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Testimonials />
      <Team />
      <About />
      <Footer />
    </main>
  );
}
