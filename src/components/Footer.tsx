import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🍔</span>
              <span className="text-2xl font-bold">VizagBurger</span>
            </div>
            <p className="text-background/70 max-w-sm">
              Serving Visakhapatnam with the freshest, juiciest burgers since 2024. 
              Made with love, served with a smile.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/vizagburger"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-background/70 hover:text-primary transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/70 hover:text-primary transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#location" className="text-background/70 hover:text-primary transition-colors">
                  Location
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-background/70">
              <li>123 Beach Road, Rama Talkies</li>
              <li>Visakhapatnam, AP 530001</li>
              <li>
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:hello@vizagburger.com" className="hover:text-primary transition-colors">
                  hello@vizagburger.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-10 pt-6 text-center text-background/50 text-sm">
          <p>© 2024 VizagBurger. All rights reserved. Made with 🍔 in Vizag.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
