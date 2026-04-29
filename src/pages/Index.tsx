import Navbar from "@/components/restaurant/Navbar";
import Hero from "@/components/restaurant/Hero";
import MenuSection from "@/components/restaurant/MenuSection";
import Footer from "@/components/restaurant/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <MenuSection />
      <Footer />
    </main>
  );
};

export default Index;
