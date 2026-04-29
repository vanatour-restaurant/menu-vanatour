import logo from "@/assets/vanatour-logo.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black bg-center bg-no-repeat bg-contain md:bg-cover"
      style={{ backgroundImage: `url(${logo})` }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 container text-center text-background flex flex-col items-center pt-32">
        <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-gold mb-6 mt-[60vh] md:mt-[55vh]">
          Fine Dining · Seasonal Kitchen
        </p>
        <Button asChild variant="reserve" size="lg">
          <a href="#menu">View Menu</a>
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-background/70 text-xs tracking-[0.3em] uppercase z-10">
        Scroll
      </div>
    </section>
  );
};

export default Hero;
