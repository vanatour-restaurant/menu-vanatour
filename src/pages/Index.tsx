import Navbar from "@/components/restaurant/Navbar";
import Hero from "@/components/restaurant/Hero";
import MenuSection from "@/components/restaurant/MenuSection";
import About from "@/components/restaurant/About";
import Footer from "@/components/restaurant/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <MenuSection />
      <About />
      <Footer />
    </main>
  );
};

export default Index;
