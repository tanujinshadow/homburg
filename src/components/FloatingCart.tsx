import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface FloatingCartProps {
  onClick: () => void;
}

const FloatingCart = ({ onClick }: FloatingCartProps) => {
  const { totalItems, totalPrice } = useCart();

  if (totalItems === 0) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-elevated hover:scale-105 active:scale-95 transition-transform animate-slide-up"
    >
      <div className="relative">
        <ShoppingCart className="w-5 h-5" />
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-foreground text-background text-xs font-bold rounded-full flex items-center justify-center">
          {totalItems}
        </span>
      </div>
      <span className="font-semibold">₹{totalPrice}</span>
    </button>
  );
};

export default FloatingCart;
