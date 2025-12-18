import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import OrderForm from './OrderForm';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart = ({ isOpen, onClose }: CartProps) => {
  const { items, updateQuantity, updateNotes, removeItem, totalPrice } = useCart();
  const [showOrderForm, setShowOrderForm] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-foreground/50 z-50 animate-fade-in"
        onClick={onClose}
      />

      {/* Cart Panel */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background z-50 shadow-2xl animate-slide-up md:animate-none md:translate-y-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="text-xl font-bold text-foreground">Your Cart</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🍔</div>
                <p className="text-muted-foreground">Your cart is empty</p>
                <button
                  onClick={onClose}
                  className="mt-4 text-primary font-medium hover:underline"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.id} className="bg-card rounded-xl p-4 shadow-card">
                    <div className="flex gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-semibold text-foreground">{item.name}</h3>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-primary font-semibold">₹{item.price}</p>
                        
                        {/* Quantity */}
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="quantity-btn"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-medium text-foreground">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="quantity-btn"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Notes */}
                    <input
                      type="text"
                      placeholder="Add notes (e.g., extra cheese, no onion)"
                      value={item.notes || ''}
                      onChange={(e) => updateNotes(item.id, e.target.value)}
                      className="mt-3 w-full text-sm input-field py-2"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-4 border-t border-border bg-card">
              <div className="flex justify-between items-center mb-4">
                <span className="text-muted-foreground">Total</span>
                <span className="text-2xl font-bold text-foreground">₹{totalPrice}</span>
              </div>
              <button
                onClick={() => setShowOrderForm(true)}
                className="w-full btn-primary"
              >
                Proceed to Order
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Order Form Modal */}
      {showOrderForm && (
        <OrderForm onClose={() => setShowOrderForm(false)} onCartClose={onClose} />
      )}
    </>
  );
};

export default Cart;
