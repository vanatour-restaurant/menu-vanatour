import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
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

const Hero = () => {
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
    <section className="relative min-h-screen flex items-center justify-center">
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
          className="text-xl md:text-4xl tracking-[0.1em] mb-8 font-serif"
          style={{ color: "#FFE8BE" }}
        >
          Բարի գալուստ Վանատուր Ռեստորան
        </p>

        <div ref={dropdownRef} className="relative z-20">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-md text-base font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#FFE8BE", color: "#000000" }}
          >
            Մենյու
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                menuOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {menuOpen && (
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 bg-white border border-gray-200 rounded-2xl shadow-2xl min-w-[220px]"
              style={{ maxHeight: "50vh", overflowY: "auto" }}
            >
              {categories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setMenuOpen(false);
                    setTimeout(() => {
                      document
                        .getElementById(cat.id)
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 100);
                  }}
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
      </div>
    </section>
  );
};

export default Hero;
