import heroImg from "@/assets/hero-dish.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Signature dish at Maison Olive restaurant"
        width={1536}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[var(--gradient-overlay)]" />

      <div className="relative z-10 container text-center text-background">
        <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-gold mb-6">
          Est. 1998 · Mediterranean Kitchen
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.05] mb-6">
          A Table Set <br />
          <span className="italic text-gold">with Care</span>
        </h1>
        <p className="max-w-xl mx-auto text-base md:text-lg text-background/85 mb-10 font-light">
          Seasonal ingredients, slow techniques, and a menu that changes with the harvest.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button variant="reserve" size="lg">Reserve a Table</Button>
          <Button asChild variant="ghostLight" size="lg">
            <a href="#menu">View Menu</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-background/70 text-xs tracking-[0.3em] uppercase z-10">
        Scroll
      </div>
    </section>
  );
};

export default Hero;
