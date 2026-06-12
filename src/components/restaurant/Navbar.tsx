import logo from "@/assets/vanatour-logo.jpg";
const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <nav className="container flex items-center justify-between py-6">
        <a href="#" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Vanatour restaurant logo"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
          />
        </a>
        <div className="hidden md:flex items-center gap-10">

            href="#menu"
            className="text-sm uppercase tracking-[0.2em] text-background/90 hover:text-gold transition-colors"
          >
            Մենյու
          </a>

            href="#visit"
            className="text-sm uppercase tracking-[0.2em] text-background/90 hover:text-gold transition-colors"
          >
            Հետադարձ կապ
          </a>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
