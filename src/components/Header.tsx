import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
interface HeaderProps {
  onCartClick: () => void;
}
const Header = ({
  onCartClick
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    totalItems
  } = useCart();
  const navLinks = [{
    href: '#menu',
    label: 'Menu'
  }, {
    href: '#about',
    label: 'Our Story'
  }, {
    href: '#location',
    label: 'Find Us'
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl">🍔</span>
            <span className="text-xl text-foreground font-extralight font-mono bg-neutral-100">HOMBURG</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.href} href={link.href} className="text-muted-foreground font-medium hover:text-primary transition-colors">
                {link.label}
              </a>)}
          </nav>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button onClick={onCartClick} className="relative p-2 rounded-full hover:bg-muted transition-colors">
              <ShoppingCart className="w-6 h-6 text-foreground" />
              {totalItems > 0 && <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center animate-scale-in">
                  {totalItems}
                </span>}
            </button>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-full hover:bg-muted transition-colors">
              {isMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map(link => <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-foreground font-medium py-2 hover:text-primary transition-colors">
                {link.label}
              </a>)}
          </nav>
        </div>}
    </header>;
};
export default Header;