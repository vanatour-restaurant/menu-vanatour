import { Instagram, Facebook, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="visit" className="bg-background border-t border-border py-20">
      <div className="container grid md:grid-cols-2 gap-12 text-center md:text-left">
        <div>
          <h3 className="font-serif text-xl text-primary mb-4">Address</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Ջրվեժ, Թևոսյան 56<br />
            Երևան, Հայաստան<br />
            Yerevan, Armenia · 0076
          </p>
        </div>
        <div>
          <h3 className="font-serif text-xl text-primary mb-4">Contact</h3>
          
            href="tel:+374041551000"
            className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground text-sm hover:text-accent transition-colors mb-4"
          >
            <Phone size={15} />
            041 551 000
          </a>
          <div className="flex items-center justify-center md:justify-start gap-4 mt-2">
            
              href="https://www.facebook.com/vanatourrestaurant/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Facebook size={20} />
            </a>
            
              href="https://www.instagram.com/vanatour_restaurant/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="container mt-16 pt-8 border-t border-border text-center text-xs text-muted-foreground tracking-widest uppercase">
        © {new Date().getFullYear()} Vanatour · Crafted with care
      </div>
    </footer>
  );
};

export default Footer;
