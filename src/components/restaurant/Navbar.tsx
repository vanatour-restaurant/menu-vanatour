import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/vanatour-logo.jpg";

const categories = [
  "Նախուտեստներ",
  "Աղցաններ",
  "Ապուրներ",
  "Տաք ուտեստներ",
  "Խորոված ձուկ",
  "Խավարտներ",
  "Կանաչեղեն",
  "Ձվածեղ",
  "Սոուսներ",
  "Աղանդեր",
  "Օղի",
  "Գինի",
  "Վիսկի, Ջին, Տեկիլա, Ռոմ",
  "Զովացուցիչ ըմպելիքներ",
  "Գարեջուր",
  "Գարեջրի խորտիկներ",
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-1 text-sm uppercase tracking-[0.2em] text-background/90 hover:text-gold transition-colors"
            >
              Մենyու
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`} />
            </button>
            {menuOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50 bg-card border border-border rounded-2xl shadow-2xl overflow-y-auto min-w-[220px] max-h-[70vh]">
                {categories.map((cat, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setMenuOpen(false);
                      setTimeout(() => {
                        document.getElementById("menu")?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }, 100);
                    }}
                    className={`w-full text-left px-6 py-3 text-sm font-medium text-foreground hover:bg-accent/20 hover:text-accent transition-colors ${i !== 0 ? "border-t border-border" : ""}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
          <a href="#visit" className="text-sm uppercase tracking-[0.2em] text-background/90 hover:text-gold transition-colors">
            Հետадарձ կаp
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
