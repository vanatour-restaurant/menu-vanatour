import { useState, useRef, useEffect } from "react";
import { sections, type Lang } from "./menuData";
import { ChevronDown, UtensilsCrossed } from "lucide-react";

const ui = {
  hy: {
    eyebrow: "Մեր Ճաշացանկը",
    title: "Պատրաստված ",
    titleItalic: "սիրով",
    subtitle: "Ճաշատեսակների ավանդական և ժամանակակից համադրություն՝ թարմ, տեղական բաղադրիչներով։",
    currency: "֏",
    armenian: "Հայերեն",
    english: "English",
    menuButton: "Ճաշացանկ",
  },
  en: {
    eyebrow: "Our Menu",
    title: "Crafted with ",
    titleItalic: "intention",
    subtitle: "A blend of Armenian tradition and modern technique — sourced fresh, served with care.",
    currency: "AMD",
    armenian: "Հայերեն",
    english: "English",
    menuButton: "Menu",
  },
};

const MenuSection = () => {
  const [lang, setLang] = useState<Lang>("hy");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const t = ui[lang];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (key: string) => {
    setIsOpen(false);
    setTimeout(() => {
      sectionRefs.current[key]?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <section id="menu" className="py-24 md:py-32 bg-background">
      <div className="container">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">{t.eyebrow}</p>
          <h2 className="font-serif text-4xl md:text-6xl text-primary mb-6">
            {t.title}
            <span className="italic">{t.titleItalic}</span>
          </h2>
          <p className="text-muted-foreground">{t.subtitle}</p>
        </div>

        {/* Language Toggle */}
        <div className="flex justify-center mb-10">
          <div
            role="tablist"
            aria-label="Language"
            className="inline-flex border border-border rounded-full p-1 bg-card"
          >
            <button
              role="tab"
              aria-selected={lang === "hy"}
              onClick={() => setLang("hy")}
              style={lang === "hy" ? { backgroundColor: "#FFE8BE", color: "#000000" } : undefined}
              className={`px-5 py-2 text-xs uppercase tracking-[0.25em] rounded-full transition-colors font-semibold ${
                lang === "hy" ? "" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {ui.hy.armenian}
            </button>
            <button
              role="tab"
              aria-selected={lang === "en"}
              onClick={() => setLang("en")}
              style={lang === "en" ? { backgroundColor: "#FFE8BE", color: "#000000" } : undefined}
              className={`px-5 py-2 text-xs uppercase tracking-[0.25em] rounded-full transition-colors font-semibold ${
                lang === "en" ? "" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {ui.en.english}
            </button>
          </div>
        </div>

        {/* Single Menu Button + Dropdown */}
        <div ref={dropdownRef} className="flex justify-center mb-16 relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            style={isOpen ? { backgroundColor: "#FFE8BE", color: "#000000", borderColor: "#FFE8BE" } : undefined}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-border bg-card text-foreground text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-200 hover:border-accent hover:text-accent shadow-sm"
          >
            <UtensilsCrossed className="h-4 w-4" />
            {t.menuButton}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Dropdown */}
          {isOpen && (
            <div className="absolute top-full mt-3 z-50 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden min-w-[220px]">
              {sections.map((section, i) => {
                const key = section.en;
                const label = lang === "hy" ? section.hy : section.en;
                return (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className={`w-full text-left px-6 py-3.5 text-sm font-medium text-foreground hover:bg-accent/20 hover:text-accent transition-colors ${
                      i !== 0 ? "border-t border-border" : ""
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Full Menu Grid (always visible) */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-20 max-w-5xl mx-auto">
          {sections.map((section) => (
            <div
              key={section.en}
              ref={(el) => { sectionRefs.current[section.en] = el; }}
              className="scroll-mt-8"
            >
              <h3 className="font-serif text-2xl md:text-3xl text-primary mb-8 italic border-b border-border pb-4">
                {lang === "hy" ? section.hy : section.en}
              </h3>
              <ul className="space-y-5">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <div className="flex items-baseline gap-3">
                      <h4 className="text-base md:text-lg text-foreground font-normal">
                        {lang === "hy" ? item.hy : item.en}
                      </h4>
                      <span className="flex-1 dotted-leader h-3" aria-hidden />
                      <span className="text-base md:text-lg text-accent font-medium whitespace-nowrap">
                        {item.price} {item.price !== "—" && t.currency}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MenuSection;
