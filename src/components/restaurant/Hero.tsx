import heroImg from "@/assets/hero-dish.jpg";
import logo from "@/assets/vanatour-logo.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Signature dish at Vanatour restaurant"
        width={1536}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[var(--gradient-overlay)]" />

      <div className="relative z-10 container text-center text-background flex flex-col items-center">
        <img
          src={logo}
          alt="Vanatour restaurant emblem"
          width={1024}
          height={1024}
          className="w-72 sm:w-96 md:w-[28rem] lg:w-[32rem] h-auto drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)] mb-6"
        />
        <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-gold mb-8">
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
