import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/vanatour-logo.jpg";

const categories = [
  { label: "Նախուտեստներ", id: "section-Appetizers" },
  { label: "Աղցաններ", id: "section-Salads" },
  { label: "Ապուրներ", id: "section-Soups" },
  { label: "Տաք ուտեստներ", id: "section-Hot Dishes" },
  { label: "Խորոված ձուկ", id: "section-Grilled Fish" },
  { label: "Խավարտներ", id: "section-Sides" },
  { label: "Կանաչեղեն", id: "section-Greens" },
  { label: "Ձվածեղ", id: "section-Egg Dishes" },
  { label: "Սոուսներ", id: "section-Sauces" },
  { label: "Աղանդեր", id: "section-Desserts" },
  { label: "Օղի", id: "section-Vodka" },
  { label: "Գինի", id: "section-Wine" },
  { label: "Վիսկի, Ջին, Տեկիլա, Ռոմ", id: "section-Whisky, Gin, Tequila, Rum" },
  { label: "Զովացուցիչ ըմպելիքներ", id: "section-Beverages" },
  { label: "Գարեջուր", id: "section-Beer" },
  { label: "Գարեջրի խորտիկներ", id: "section-Beer Snacks" },
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

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-black/ backdrop-bg-black">
      <nav className="container flex items-center justify-between py-4">
        {/* Logo - left */}
        <a href="#" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Vanatour restaurant logo"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
          />
        </a>

        {/* Hamburger - right */}
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Menu"
            className="flex items-center justify-center h-11 w-11 rounded-full text-background hover:bg-white/10 transition-colors"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {menuOpen && (
            <div
              className="absolute top-full right-0 mt-2 z-50 bg-white border border-gray-200 rounded-2xl shadow-2xl min-w-[220px]"
              style={{ maxHeight: "70vh", overflowY: "auto" }}
            >
              {categories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSection(cat.id)}
                  className={`w-full text-left px-6 py-3 text-sm font-medium text-gray-800 hover:bg-amber-50 hover:text-amber-700 transition-colors ${
                    i !== 0 ? "border-t border-gray-100" : ""
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
