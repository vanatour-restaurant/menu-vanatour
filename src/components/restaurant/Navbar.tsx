import { Button } from "@/components/ui/button";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Visit", href: "#visit" },
];

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <nav className="container flex items-center justify-between py-6">
        <a href="#" className="font-serif text-2xl font-semibold text-background tracking-wide">
          Maison <span className="italic text-gold">Olive</span>
        </a>
        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm uppercase tracking-[0.2em] text-background/90 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <Button variant="reserve" size="sm">Reserve</Button>
      </nav>
    </header>
  );
};

export default Navbar;
