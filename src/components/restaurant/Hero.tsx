import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/vanatour-logo.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Vanatour candlelit dining room"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 container text-center text-background flex flex-col items-center">
        <img
          src={logo}
          alt="Vanatour restaurant emblem"
          width={400}
          height={400}
          className="w-56 sm:w-64 md:w-80 h-auto rounded-full object-cover ring-1 ring-gold/40 shadow-[var(--shadow-soft)] mb-10"
        />
        <p
          className="text-2xl md:text-4xl tracking-[0.1em] mb-8 font-serif"
          style={{ color: "#FFE8BE" }}
        >
          Բարի գալուստ Վանատուր Ռեստորան
        </p>
        <Button
          asChild
          size="lg"
          className="hover:opacity-90"
          style={{ backgroundColor: "#FFE8BE", color: "#000000" }}
        >
          <a href="#menu">Մենյու</a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
