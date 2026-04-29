const Footer = () => {
  return (
    <footer id="visit" className="bg-background border-t border-border py-20">
      <div className="container grid md:grid-cols-3 gap-12 text-center md:text-left">
        <div>
          <h3 className="font-serif text-xl text-primary mb-4">Visit</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            42 Rue des Oliviers<br />
            Old Town Quarter<br />
            Lyon, France
          </p>
        </div>
        <div>
          <h3 className="font-serif text-xl text-primary mb-4">Hours</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Tue – Thu · 6pm – 10pm<br />
            Fri – Sat · 6pm – 11pm<br />
            Sunday Brunch · 11am – 3pm
          </p>
        </div>
        <div>
          <h3 className="font-serif text-xl text-primary mb-4">Contact</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            +33 4 78 12 34 56<br />
            hello@maisonolive.fr
          </p>
        </div>
      </div>
      <div className="container mt-16 pt-8 border-t border-border text-center text-xs text-muted-foreground tracking-widest uppercase">
        © {new Date().getFullYear()} Vanatour · Crafted with care
      </div>
    </footer>
  );
};

export default Footer;
