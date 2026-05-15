import { useState } from "react";
import { sections, type Lang } from "./menuData";

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
  const t = ui[lang];

  return (
    <section id="menu" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">{t.eyebrow}</p>
          <h2 className="font-serif text-4xl md:text-6xl text-primary mb-6">
            {t.title}
            <span className="italic">{t.titleItalic}</span>
          </h2>
          <p className="text-muted-foreground">{t.subtitle}</p>
        </div>

        <div className="flex justify-center mb-16">
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

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-20 max-w-5xl mx-auto">
          {sections.map((section) => (
            <div key={section.en}>
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
