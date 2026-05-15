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
          <a href="tel:+374041551000" className="text-muted-foreground text-sm hover:text-accent transition-colors block mb-4">
            📞 041 551 000
          </a>
          <div className="flex items-center justify-center md:justify-start gap-4">
            {/* Facebook */}
            <a href="https://www.facebook.com/vanatourrestaurant/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-accent transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/vanatour_restaurant/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-accent transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
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
