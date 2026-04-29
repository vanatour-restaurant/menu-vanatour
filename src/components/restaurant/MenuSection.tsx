import starterImg from "@/assets/dish-starter.jpg";
import mainImg from "@/assets/dish-main.jpg";
import dessertImg from "@/assets/dish-dessert.jpg";

type Item = { name: string; desc: string; price: string };

const sections: { title: string; image?: string; items: Item[] }[] = [
  {
    title: "Starters",
    image: starterImg,
    items: [
      { name: "Heirloom Tomato Salad", desc: "Aged balsamic, basil oil, burrata cream", price: "14" },
      { name: "Charred Octopus", desc: "Smoked paprika, fingerling potato, lemon", price: "18" },
      { name: "Wild Mushroom Tartine", desc: "Sourdough, thyme butter, parmesan", price: "13" },
      { name: "Country Pâté", desc: "Cornichons, grain mustard, baguette", price: "12" },
    ],
  },
  {
    title: "Main Courses",
    image: mainImg,
    items: [
      { name: "Grilled Ribeye", desc: "Rosemary jus, roasted root vegetables", price: "38" },
      { name: "Pan-Seared Sea Bass", desc: "Saffron broth, fennel, cherry tomato", price: "32" },
      { name: "Duck Confit", desc: "Cherry gastrique, potato gratin", price: "29" },
      { name: "Wild Mushroom Risotto", desc: "Black truffle shavings, aged pecorino", price: "26" },
    ],
  },
  {
    title: "Desserts",
    image: dessertImg,
    items: [
      { name: "Dark Chocolate Fondant", desc: "Vanilla bean ice cream, fresh berries", price: "11" },
      { name: "Crème Brûlée", desc: "Madagascan vanilla, almond tuile", price: "10" },
      { name: "Tarte Tatin", desc: "Caramelized apples, crème fraîche", price: "12" },
    ],
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Our Menu</p>
          <h2 className="font-serif text-4xl md:text-6xl text-primary mb-6">
            Crafted with <span className="italic">intention</span>
          </h2>
          <p className="text-muted-foreground">
            Sourced daily from local farmers and fishermen. Our menu shifts gently with the seasons.
          </p>
        </div>

        <div className="space-y-24">
          {sections.map((section, idx) => (
            <div
              key={section.title}
              className={`grid md:grid-cols-5 gap-10 md:gap-16 items-center ${
                idx % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-2">
                <div className="relative overflow-hidden rounded-sm shadow-[var(--shadow-soft)] group">
                  <img
                    src={section.image}
                    alt={`${section.title} dish presentation`}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className="md:col-span-3">
                <h3 className="font-serif text-3xl md:text-4xl text-primary mb-8 italic">
                  {section.title}
                </h3>
                <ul className="space-y-6">
                  {section.items.map((item) => (
                    <li key={item.name} className="group">
                      <div className="flex items-baseline gap-3">
                        <h4 className="font-serif text-xl text-foreground whitespace-nowrap">
                          {item.name}
                        </h4>
                        <span className="flex-1 dotted-leader h-4" aria-hidden />
                        <span className="font-serif text-xl text-accent font-semibold">
                          ${item.price}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 max-w-md">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
