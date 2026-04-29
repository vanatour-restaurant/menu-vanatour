const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-gold mb-6">Our Story</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
          “Good food is the foundation of <span className="italic">genuine happiness.</span>”
        </h2>
        <p className="text-primary-foreground/80 leading-relaxed mb-4">
          For over two decades, Maison Olive has been a quiet corner where families gather, friends linger, and meals are made to be remembered. Our chef, Élise Marchand, leads a kitchen rooted in Mediterranean tradition with a quiet, modern hand.
        </p>
        <p className="font-serif italic text-gold mt-8">— Chef Élise Marchand</p>
      </div>
    </section>
  );
};

export default About;
