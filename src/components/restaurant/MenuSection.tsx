import { useState } from "react";
import { sections, type Lang } from "./menuData";
import { ChevronDown } from "lucide-react";

const ui = {
  hy: {
    eyebrow: "Մեր Ճաշացանկը",
    title: "Պատրաստված ",
    titleItalic: "սիրով",
    subtitle: "Ճաշատեսակների ավանդական և ժամանակակից համադրություն՝ թարմ, տեղական բաղադրիչներով։",
    currency: "֏",
    armenian: "Հայերեն",
    english: "English",
  },
  en: {
    eyebrow: "Our Menu",
    title: "Crafted with ",
    titleItalic: "intention",
    subtitle: "A blend of Armenian tradition and modern technique — sourced fresh, served with care.",
    currency: "AMD",
    armenian: "Հայերեն",
    english: "English",
  },
};

const MenuSection = () => {
  const [lang, setLang] = useState<Lang>("hy");
  const [openSection, setOpenSection] = useState<string | null>(null);
  const t = ui[lang];

  const toggle = (key: string) => {
    setOpenSection((prev) => (prev === key ? null : key));
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
        <div className="flex justify-center mb-12">
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

        {/* Dropdown Menu */}
        <div className="max-w-4xl mx-auto">

          {/* Category Tabs Row */}
          <div className="flex flex-wrap justify-center gap-2 mb-2">
            {sections.map((section) => {
              const key = section.en;
              const isOpen = openSection === key;
              const label = lang === "hy" ? section.hy : section.en;

              return (
                <button
                  key={key}
                  onClick={() => toggle(key)}
                  aria-expanded={isOpen}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-200 ${
                    isOpen
                      ? "bg-accent text-background border-accent"
                      : "bg-card text-foreground border-border hover:border-accent hover:text-accent"
                  }`}
                >
                  {label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
              );
            })}
          </div>

          {/* Dropdown Panel */}
          <div className="relative mt-4">
            {sections.map((section) => {
              const key = section.en;
              const isOpen = openSection === key;

              return (
                <div
                  key={key}
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="border border-border rounded-2xl bg-card p-8 shadow-sm">
                    <h3 className="font-serif text-2xl md:text-3xl text-primary italic mb-6 pb-4 border-b border-border">
                      {lang === "hy" ? section.hy : section.en}
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
                      {section.items.map((item, i) => (
                        <li key={i}>
                          <div className="flex items-baseline gap-3">
                            <h4 className="text-base text-foreground font-normal">
                              {lang === "hy" ? item.hy : item.en}
                            </h4>
                            <span className="flex-1 dotted-leader h-3" aria-hidden />
                            <span className="text-base text-accent font-medium whitespace-nowrap">
                              {item.price} {item.price !== "—" && t.currency}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default MenuSection;
