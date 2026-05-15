const Footer = () => {
  return (
    <footer id="visit" className="bg-background border-t border-border py-20">
      <div className="container grid md:grid-cols-2 gap-12 text-center md:text-left">
        <div>
          <h3 className="font-serif text-xl mb-4" style={{ color: '#5C3317' }}>Address</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Ջրվեժ, Թևոսյան 56<br />
            Երևան, Հայաստան<br />
            Yerevan, Armenia · 0076
          </p>
        </div>
        <div>
          <h3 className="font-serif text-xl mb-4" style={{ color: '#5C3317' }}>Contact</h3>
          <a href="tel:+374041551000" className="text-sm hover:opacity-70 transition-opacity flex items-center justify-center md:justify-start gap-2 mb-4" style={{ color: '#5C3317' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.49 5.49l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            041 551 000
          </a>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <a href="https://www.facebook.com/vanatourrestaurant/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-accent transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
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
